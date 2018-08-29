
-- CREATE TABLE `Produtos` (
--   `id_produto` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `nome` varchar(50) NOT NULL,
--   `categoria` varchar(30) NOT NULL,
--   `preco_compra` DECIMAL(10,2),
--   `preco_venda` DECIMAL(10,2) NOT NULL

-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- INSERT INTO `Produtos` VALUES(1, 'cartucho 2','abcll2',30,30 )('nome', categoria, preco_compra, preco_venda ) ;
-- INSERT INTO `Produtos` (9,'cartucho 2','codigo2',20,20 )
-- SELECT 'cartucho 2','codigo2',20,20 FROM DUAL
-- WHERE NOT EXISTS (
--     SELECT categoria FROM Produtos WHERE categoria = 'codigo2'
-- );
-- select * from ´Produtos´;

-- INSERT INTO users (full_name, login, password) 
--   SELECT 'Mahbub Tito','tito',SHA1('12345') FROM DUAL
-- WHERE NOT EXISTS 
--   (SELECT login FROM users WHERE login='tito');
TRUNCATE table `Produtos`;
alter table `Produtos` add unique (`categoria`);