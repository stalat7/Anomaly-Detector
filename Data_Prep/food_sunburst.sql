select   replace(replace(level1, '-', '_') ||
        (case when replace(level2, '-', '_') is null then '' else '-' || replace(level2, '-', '_') end) ||
        (case when replace(level3, '-', '_') is null then '' else '-' || replace(level3, '-', '_') end) ||
        (case when replace(level4, '-', '_') is null then '' else '-' || replace(level4, '-', '_') end) ||
        (case when replace(level5, '-', '_') is null then '' else '-' || replace(level5, '-', '_') end), ' ', '_')
         || '-end' as levels
    , count(*) as total
from foods
where level1 is not null
group by 1
order by 2 desc;

select '"' || level || '"' || ' : "' || c.color || '",'
from (select replace(replace(n.level1, '-', '_'), ' ', '_') as level, row_number() over (order by 1) as rn
               from (select distinct level1 from foods
                     union
                     select distinct level2 from foods
                     union
                     select distinct level3 from foods
                     union
                     select distinct level4 from foods
                     union
                     select distinct level5 from foods) n where level1 is not null)  k
join colors c on k.rn % 12 = c.id
order by 1;



create table colors
(
  id int,
  color varchar(20)
);


select   replace(replace(level1, '-', '_') ||
        (case when replace(level2, '-', '_') is null then '' else '-' || replace(level2, '-', '_') end) ||
        (case when replace(level3, '-', '_') is null then '' else '-' || replace(level3, '-', '_') end) ||
        (case when replace(level4, '-', '_') is null then '' else '-' || replace(level4, '-', '_') end) ||
        (case when replace(level5, '-', '_') is null then '' else '-' || replace(level5, '-', '_') end), ' ', '_') as levels
    , count(*) as total
from foods
where level1 is not null
group by 1
order by 2 desc;


select   replace(replace(c_level1, '-', '_') ||
        (case when replace(c_level2, '-', '_') is null then '' else '-' || replace(c_level2, '-', '_') end) ||
        (case when replace(c_level3, '-', '_') is null then '' else '-' || replace(c_level3, '-', '_') end) ||
        (case when replace(c_level4, '-', '_') is null then '' else '-' || replace(c_level4, '-', '_') end) ||
        (case when replace(c_level5, '-', '_') is null then '' else '-' || replace(c_level5, '-', '_') end), ' ', '_') as levels
    , count(*) as total
from foods
where c_level1 is not null
group by 1
order by 2 desc;