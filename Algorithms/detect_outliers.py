import numpy as np
import pandas as pd
from sklearn.ensemble import IsolationForest
from sklearn.cluster import DBSCAN
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import warnings
warnings.simplefilter(action='ignore')

def getData(category, data, nutrition_cols, threshold):
    toret = []
    cat = data[data['Custom_Category'] == category]
    total = len(cat)
    for nc in nutrition_cols:
        a = (total - cat[nc].isnull().sum()) / total
        if a >= threshold:
            toret.append(nc)
    return cat.dropna(subset=toret, inplace=False), toret

def getPCA(data, preds):
    try:
        pca = PCA(n_components=3)  # Reduce to 3 dimensions
        scaler = StandardScaler()
        data_scaled = scaler.fit_transform(data)
        data_reduced = pca.fit_transform(data_scaled)

        d3 = {'x': data_reduced[:, 0], 'y': data_reduced[:,1], 'z': data_reduced[:,2], 'outlier': preds}

        pdnumsqr3 = pd.DataFrame.from_dict(d3)
        return pdnumsqr3['x'], pdnumsqr3['y'], pdnumsqr3['z']
    except Exception as e:
        print('exception : ' + str(e))


def iforest_outliers(name, output_path, path):

    df = pd.read_csv(path, encoding='utf-8')
    print('Data Loaded')

    nutrition_cols = ['Energy_100G', 'Fat_100G',
       'Saturated_Fat_100G', 'Cholesterol_100G', 'Carbohydrates_100G',
       'Sugars_100G', 'Fiber_100G', 'Proteins_100G', 'Sodium_100G',
       'Vitamin_A_100G', 'Vitamin_C_100G', 'Calcium_100G', 'Iron_100G']

    #drop rows that have no Custom_Category populated
    df2 = df.dropna(subset=['Custom_Category'], inplace=False)

    #get list of all the categories
    categories = df2.Custom_Category.unique()
    conc = pd.DataFrame()


    for cat in categories:
        data, cols = getData(cat, df2, nutrition_cols, 0.5)
        nutrients = ','.join(cols)

        iforest1 = IsolationForest(random_state=42, contamination=0.01, n_estimators=100, bootstrap=False)
        iforest3 = IsolationForest(random_state=42, contamination=0.03, n_estimators=100, bootstrap=False)
        iforest5 = IsolationForest(random_state=42, contamination=0.05, n_estimators=100, bootstrap=False)
        iforest10 = IsolationForest(random_state=42, contamination=0.1, n_estimators=100, bootstrap=False)

        iforest1.fit(data[cols])
        iforest3.fit(data[cols])
        iforest5.fit(data[cols])
        iforest10.fit(data[cols])

        dfunc = iforest1.decision_function(data[cols])
        preds1 = iforest1.predict(data[cols])
        preds3 = iforest3.predict(data[cols])
        preds5 = iforest5.predict(data[cols])
        preds10 = iforest10.predict(data[cols])

        data['decision_function'] = dfunc

        data['iforest_outlier_1'] = preds1
        data['iforest_outlier_3'] = preds3
        data['iforest_outlier_5'] = preds5
        data['iforest_outlier_10'] = preds10

        if len(cols) > 2 and len(data) > 2:
            x, y, z = getPCA(data[cols], preds1)
            data['pca_x1'] = x.ravel()
            data['pca_y1'] = y.ravel()
            data['pca_z1'] = z.ravel()
        else:
            print(cat + ': insufficient data: columns = ' + str(len(cols) + ' and rows = ' + str(len(data))))

        data['Considered_Nutrients'] = nutrients

        print(cat + ' : ' + str(len(data)) + ' records')
        conc = pd.concat([conc, data])


    df2 = pd.merge(df2, conc, how='inner')
    df2.to_csv(output_path, header=True, encoding='utf-8', index=False)


def DBScan(name, output, path):
    print('opening file:' + path)
    dfData = pd.read_csv(path, sep=",", encoding='utf-8')
    df = dfData['Custom_Category'].value_counts().sort_values(ascending=False).reset_index()
    Categories = list(df['index'].unique())
    # Categories = ["Chocolates", "Juice"]
    nutrients = ['Fat_100G', 'Saturated_Fat_100G', 'Cholesterol_100G', 'Carbohydrates_100G', 'Sugars_100G',
                 'Fiber_100G', 'Proteins_100G', 'Sodium_100G', 'Vitamin_A_100G', 'Vitamin_C_100G', 'Calcium_100G',
                 'Iron_100G', 'Energy_100G']
    eps = [0.3, 0.5, 0.7]
    sample_size = [3, 5]

    for Category in Categories:
        for Nutrient in nutrients:
            for e in eps:
                for s in sample_size:
                    colName = Nutrient + "_" + str(e).replace('.', 'dot') + "_" + str(s)
                    dfData[colName] = -99  # missing value cluster

    for Category in Categories:
        print('Running algorithm on category: ' + Category)
        for Nutrient in nutrients:

            if dfData[dfData["Custom_Category"] == Category][Nutrient].count() < 20:
                continue

            # filter the category and nutrient
            indexes = dfData[(dfData["Custom_Category"] == Category) & (dfData[Nutrient].notnull())].index
            Y = dfData[Nutrient].loc[indexes].values
            X = range(len(Y))

            data = StandardScaler().fit_transform(np.column_stack([X, Y]))

            for e in eps:

                for s in sample_size:
                    # Compute DBSCAN
                    db = DBSCAN(eps=e, min_samples=s).fit(data)
                    core_samples_mask = np.zeros_like(db.labels_, dtype=bool)
                    core_samples_mask[db.core_sample_indices_] = True
                    labels = db.labels_

                    colName = Nutrient + "_" + str(e).replace('.', 'dot') + "_" + str(s)
                    dfData[colName].loc[indexes] = labels

    dfData.to_csv(output, header=True, index=False)


if __name__ == '__main__':

    files = [
             {'name': '25_Category', 'output': "../Raw_Data/25_Category_IForest.csv", 'path': "../Raw_Data/OpenFF_Custom_withlevels_25Categories.csv"}
            ]
    for f in files:
        print('---------------Beginning Isolation Forest Algorithm on file: ' + f['name'] + '----------------')
        iforest_outliers(f['name'], f['output'], f['path'])
        print('---------------End Isolation Forest Algorithm----------------')
        #the output file of the isolation_forest algorithm is the input file to DB Scan
        print('---------------Beginning DB Scan Algorithm on file: ' + f['output'] + '----------------')
        DBScan(f['name'], '../WebApp/data/OpenFF_Custom_withlevels_Final_25Categories.csv', f['output'])
        print('---------------End DB Scan Algorithm----------------')
