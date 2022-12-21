create table dbo.Klienti(
KlientiId int identity(1,1),
EmriKlientit varchar(500),
LlojiSigurimit varchar(500)
)

insert into dbo.Klienti values
('Rea Hoxha','Shendet')

select * from dbo.Klienti