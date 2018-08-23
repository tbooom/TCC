
CREATE TABLE `Produtos` (
  `id_produto` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(50) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `preco_compra` DECIMAL(10,2),
  `preco_venda` DECIMAL(10,2) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Produtos` VALUES(1, 'cartucho 1','xxl1',20,20 );

INSERT INTO `Produtos` VALUES(1, 'cartucho 2','abcll2',30,30 );