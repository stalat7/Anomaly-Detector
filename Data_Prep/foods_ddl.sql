create table foods
(
  key bigint,
  code bigint not null,
  product_name varchar(1000),
  Custom_Category varchar(1000),
  c_level1	varchar(100),
  c_level2	varchar(100),
  c_level3	varchar(100),
  c_level4	varchar(100),
  c_level5	varchar(100),
  brands varchar(500),
  fat_100g numeric,
  saturated_fat_100g numeric,
  cholesterol_100g numeric,
  carbohydrates_100g numeric,
  sugars_100g numeric,
  fiber_100g numeric,
  proteins_100g numeric,
  sodium_100g numeric,
  vitamin_a_100g numeric,
  vitamin_c_100g numeric,
  calcium_100g numeric,
  iron_100g numeric,
  energy_100g numeric,
  created_date varchar(50),
  last_modified varchar(50),
  categories  varchar(1000),
  categories_en varchar(1000),
  countries_tags varchar(1000),
  main_category_en varchar(1000)
);