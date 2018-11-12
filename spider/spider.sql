
SET NAMES UTF8;
DROP DATABASE IF EXISTS spider;
CREATE DATABASE spider CHARSET=UTF8;
USE spider;
-- ----------------------------
-- Table structure for `splider_index_carousel`
-- ----------------------------
DROP TABLE IF EXISTS spider_index_carousel;
CREATE TABLE spider_index_carousel (
  cid int(11) NOT NULL auto_increment,
   img varchar(128),
  title varchar(64),
  href varchar(128),
  PRIMARY KEY  (cid)
) ;
-- ----------------------------
-- Records of spider_index_carousel
-- ----------------------------
INSERT INTO spider_index_carousel VALUES (1, 'img/index/banner-1.jpg','轮播广告商品1', 'product_details.html?lid=28');
INSERT INTO `spider_index_carousel` VALUES (2, 'img/index/banner2.png', '轮播广告商品2', 'product_details.htmllid=19');
INSERT INTO `spider_index_carousel` VALUES (3, 'img/index/banner3.png', '轮播广告商品3', 'lookforward.html');
INSERT INTO `spider_index_carousel` VALUES (4, 'img/index/banner4.png', '轮播广告商品4', 'lookforward.html');

-- ----------------------------
-- Table structure for `spider_index_product`
-- ----------------------------
DROP TABLE IF EXISTS `spider_index_product`;
CREATE TABLE `spider_index_product` (
  `pid` int(11) NOT NULL auto_increment,
  `pname` varchar(32) default NULL, 
  `href` varchar(64) default NULL,  
  `price` decimal(10,2) default NULL,
  `score` int(32) default NULL,
  `goodrate` int(32) default NULL,
  `pic` varchar(128) default NULL,
  `seq_recommended` tinyint(4) default NULL,
  `seq_top_sale` tinyint(4) default NULL,  
  `detail` varchar(32) default NULL,
  `type` varchar(32) default NULL,
  PRIMARY KEY  (`pid`)
); 
-- ----------------------------
-- Records of spider_index_product
-- ----------------------------
INSERT INTO `spider_index_product` VALUES ('1','一出好戏', 'movie-detail.html?mid=1', '23', '5.0', '98%', 'img/index/hot-1-1.jpg', '23', '33','','喜剧');
INSERT INTO `spider_index_product` VALUES (2,'快把我哥带走', 'movie-detail.html?mid=2', '23', '6.0', '98%', 'img/index/hot-1.jpg', '23', '33','','奇幻 喜剧');
INSERT INTO `spider_index_product` VALUES (3, '大师兄', 'movie-detail.html?mid=3', '23', '5.0', '98%', 'img/index/hot-2.jpg', '23', '33','','喜剧 惊悚 动作');
INSERT INTO `spider_index_product` VALUES (4, '精灵旅社3：疯狂', 'movie-detail.html?mid=4', '23', '7.0', '98%', 'img/index/hot-3.jpg', '23', '33','','冒险 动画 奇幻');
INSERT INTO `spider_index_product` VALUES (5, '蚁人2：黄蜂女现身', 'movie-detail.html?mid=5', '23', '7.0', '98%', 'img/index/hot-4.jpg', '23', '33','','动作 科幻 冒险');
INSERT INTO `spider_index_product` VALUES (6, '阿尔法：狼伴归途', 'movie-detail.html?mid=6', '23', '5.0', '98%', 'img/index/hot-5.jpg', '23', '33','','动作 冒险');
INSERT INTO `spider_index_product` VALUES (7, '深海历险记', 'movie-detail.html?mid=7', '23', '5.0', '98%', 'img/index/hot-6.jpg', '23', '33','','少儿 喜剧');
INSERT INTO `spider_index_product` VALUES (8, '碟中谍全面瓦解', 'movie-detail.html?mid=8', '23', '7.0', '98%', 'img/index/hot-changci1.jpg', '23', '33','火线重燃','动作 惊悚 冒险');
INSERT INTO `spider_index_product` VALUES (9, '蚁人2：黄蜂女现身', 'movie-detail.html?mid=5', '23', '7.0', '98%', 'img/index/hot-changci2.jpg', '23', '33','超凡搭档出击','');
INSERT INTO `spider_index_product` VALUES (10, '西红柿首富', 'movie-detail.html?mid=9', '23', '7.0', '98%', 'img/index/hot-changci3.jpg', '23', '33','是金子总会发光','喜剧');
INSERT INTO `spider_index_product` VALUES (11, '金蝉脱壳', 'movie-detail.html?mid=11', '23', '7.0', '98%', 'img/index/reping.jpg', '23', '33','','');
INSERT INTO `spider_index_product` VALUES (12, '一出好戏', 'href', '23', '7.0', '98%', 'null', '23', '33','','');
-- ----------------------------
-- Table structure for `spider_movie`
-- ----------------------------
DROP TABLE IF EXISTS `spider_movie`;
CREATE TABLE `spider_movie` (
  `mid` int(11) NOT NULL auto_increment,
  `mname` varchar(32) default NULL,
  `Eng_name` varchar(16) default NULL,
  `time` varchar(16) default NULL,
  `area` varchar(16) default NULL,
  `language` varchar(16) default NULL,
  `length` int(8) default NULL,
  `director` varchar(32) default NULL,
  `staring` varchar(32) default NULL,
  `type` varchar(16) default NULL,
  `release_time`  int(16) default NULL,
  `detail` varchar(64) default NULL,
  `texiao` varchar(64) default NULL,
  `keyword`  varchar(16) default NULL,
  `keychar` varchar(16) default NULL,
   `score` int(32) default NULL,
   `title` varchar(128) default NUll,
  `price` int(32) default NULL,
  `intr` varchar(256) default NULL,
  PRIMARY KEY  (`mid`)
) ;
-- ----------------------------
-- Records of spider_movie
-- ----------------------------
INSERT INTO `spider_movie` VALUES (1, '一出好戏', 'The Island', '现代','大陆','国语','134','黄渤','黄渤/舒淇/王宝强/张艺兴/于和伟/','喜剧','2018-08-10','众人身处荒岛','2D','keyword','keychar','5','一出好戏 现代 大陆 黄渤 于和伟 黄渤 舒淇 yichuhaoxi王宝强 张艺兴于和伟 喜剧 2D 2d','23','');
INSERT INTO `spider_movie` VALUES (2, '快把我哥带走', 'Go Brother', '现代','大陆','国语','115','郑芬芬','张子枫/彭昱畅/赵今麦/孙泽源/方翔锐/刘冠毅','奇幻/喜剧','2018-08-17','快把我哥待会你家','2D','keyword','keychar','6','快把我哥带走奇幻/kuaibawogedaizou喜剧剧情张子枫/彭昱畅/赵今麦/孙泽源/方翔锐/刘冠毅2D 2d ','23','');
INSERT INTO `spider_movie` VALUES (3, '大师兄', 'Big Brother', '现代','大陆','国语','134','阚家伟/甄子丹',' 陈乔恩 / 喻亢 / 骆明劼 / 汤君慈 / 汤君耀 / 李靖筠 / 刘朝健 / 林秋楠','喜剧 惊悚 动作','2018-08-10','甄子丹当老师','3D','keyword','keychar','5','大师兄喜剧动作 甄子丹2d 2D','23','');
INSERT INTO `spider_movie` VALUES (4, '精灵旅社3:疯狂假期', 'Hotel Transylvania 3: Summer Vacation', '现代','大陆','国语','134','格恩迪·塔塔科夫斯基/亚当·桑德勒','凯瑟琳·哈恩 / 史蒂夫·布西密 / ','冒险 动画 奇幻','2018-08-17','爆笑启航，真爱一夏','2D','keyword','keychar','7','精灵旅社3:疯狂假期冒险 动画 奇幻凯瑟琳·哈恩 / 史蒂夫·布西密 3d 3D jinllinglvshe','￥32','');
INSERT INTO `spider_movie` VALUES (5, '蚁人2:黄蜂女现身', 'Ant-Man and the Wasp', '现代','大陆','英语','134','佩顿·里德/保罗·路德 /','保罗·路德 / 伊万杰琳·莉莉 / 迈克尔·佩纳 / 沃尔顿·戈金斯 / 鲍比·','动作 科幻 冒险','2018-08-10','超凡搭档组队出击，不以大小论英雄','3D','keyword','keychar','5','蚁人2:黄蜂女现身 yiren huangfengnv 科幻冒险动作 现代 英语 ','23',' ');
INSERT INTO `spider_movie` VALUES (6, '阿尔法：狼伴归途', '2D', '现代','大陆','国语','134','艾尔伯特·休斯/柯蒂·斯密特-麦菲 /','艾尔伯特·休斯/柯蒂·斯密特-麦菲 /','动作 冒险','2018-08-10','最忠诚的朋友，最艰难的归途','pic','keyword','keychar','7','阿尔法：狼伴归途 langbanguitu 国语动作 冒险奇幻','23','');
INSERT INTO `spider_movie` VALUES (7, '深海历险记', 'detail', '现代','大陆','国语','134','陈红 / 张云龙 /',' 陈红 / 张云龙 / 杨希 / 郭政建 / 张遥函 / 胡静 ','少儿 喜剧','2018-08-10','疯狂海底城','3D','keyword','keychar','5','深海历险记 少儿 喜剧 奇幻陈红 / 张云龙','23','');
INSERT INTO `spider_movie` VALUES (8, '碟中谍', 'Mission: Impossible - Fallout', '现代','大陆','国语','134','克里斯托弗·麦奎里/汤姆·克鲁斯 / ','文·瑞姆斯 / 西蒙·佩吉 / 丽贝卡·弗格森 ','动作 惊悚 冒险','2018-08-10','火线重燃','2D','keyword','keychar','8','碟中谍文·瑞姆斯 / 西蒙·佩吉动作 惊悚 冒险diezhongdie','23','');
INSERT INTO `spider_movie` VALUES (9, '西红柿首富', 'Hello, Mr. Billionaire', '现代','大陆','国语','134','闫非',' 彭大魔/沈腾','喜剧','2018-08-10','是金子总会花光的','2D','keyword','keychar','7','西红柿首富彭大魔/沈腾喜剧 2D','43','《西虹市首富》的故事发生在《夏洛特烦恼》中的“特烦恼”之城“西虹市”。混迹于丙级业余足球队的守门员王多鱼（沈腾饰演），因比赛失利被开除离队。正处于人生最低谷的他接受了神秘台湾财团“一个月花光十亿资金”的挑战。本以为快乐生活就此开始，王多鱼却第一次感到“花钱特烦恼”！想要人生反转走上巅峰，真的没有那么简单。');
INSERT INTO `spider_movie` VALUES (10, '反贪风暴3', 'HL Storm', '现代','大陆','国语','134','德禄',' 古天乐 / 张智霖 / 郑嘉颖 / ','动作 犯罪','2018-08-10','是反贪以人民的名义','2D','keyword','keychar','9','反贪风暴3古天乐 / 张智霖 / 郑嘉颖 /动作 犯罪','45','《西虹市首富》的故事发生在《夏洛特烦恼》中的“特烦恼”之城“西虹市”。混迹于丙级业余足球队的守门员王多鱼（沈腾饰演），因比赛失利被开除离队。正处于人生最低谷的他接受了神秘台湾财团“一个月花光十亿资金”的挑战。本以为快乐生活就此开始，王多鱼却第一次感到“花钱特烦恼”！想要人生反转走上巅峰，真的没有那么简单。');
INSERT INTO `spider_movie` VALUES (11, '道高一丈', 'Hello, Mr. Billionaire', '现代','大陆','国语','134','姜凯阳',' /聂远 / 谭凯 / 徐露 /','犯罪 剧情 悬疑','2018-09-10','魔高一尺、道高一丈','3D','keyword','keychar','9','道高一丈姜凯阳犯罪 剧情 悬疑','55','');
INSERT INTO `spider_movie` VALUES (12, '败者为王', 'Lee Chong Wei', '现代','大陆','国语','134','闫非',' 彭大魔/沈腾','喜剧 爱情','2018-08-10','永不放弃','3D','keyword','keychar','6','摆着为王喜剧 爱情彭大魔/沈腾','43','');
INSERT INTO `spider_movie` VALUES (13, '传奇的诞生', 'Pelé: Birth of a Legend', '现代','大陆','国语','134','闫非',' 杰夫·泽姆巴利斯特 / 迈克尔·泽姆巴利斯特/凯文·德·保拉 /','喜剧','2018-08-10','球王贝利','3d','keyword','keychar','5','传奇的诞生杰夫·泽姆巴利斯特喜剧爱情 冒险 ','43','');
INSERT INTO `spider_movie` VALUES (14, '三只小猪2', 'Hello, Mr. Billionaire', '现代','大陆','国语','134','闫非',' 刘炜/王晓彤 ','动画','2018-08-10','农村励志大叔，遇到三只改变命运的小猪','pic','keyword','keychar','5','动画 少儿 三只小猪2 冒险 刘炜/王晓彤snazhixiiaozhu','43','');
INSERT INTO `spider_movie` VALUES (15, '未来机器城', 'Next Gen', '现代','大陆','国语','134','闫非',' 彭大魔/沈腾','动画 科幻 冒险','2018-08-10','终结孤单','2D','keyword','keychar','5','未来机器城动画 科幻 冒险 wielaijiqicheng','43','');
INSERT INTO `spider_movie` VALUES ( NULL, '反贪风暴3', 'HL Storm', '现代','大陆','国语','134','德禄',' 古天乐 / 张智霖 / 郑嘉颖 / ','动作 犯罪','2018-08-10','是反贪以人民的名义','pic','keyword','keychar','9','反贪风暴3古天乐 / 张智霖 / 郑嘉颖 /动作 犯罪','43','');
INSERT INTO `spider_movie` VALUES (NULL, '道高一丈', 'Hello, Mr. Billionaire', '现代','大陆','国语','134','姜凯阳',' /聂远 / 谭凯 / 徐露 /','犯罪 剧情 悬疑','2018-09-10','魔高一尺、道高一丈','2D','keyword','keychar','9','道高一丈姜凯阳犯罪 剧情 悬疑','43','');
INSERT INTO `spider_movie` VALUES (NULL, '败者为王', 'Lee Chong Wei', '现代','大陆','国语','134','闫非',' 彭大魔/沈腾','喜剧 爱情','2018-08-10','永不放弃','2d','keyword','keychar','6','摆着为王喜剧 爱情彭大魔/沈腾','43','');
INSERT INTO `spider_movie` VALUES (NULL, '传奇的诞生', 'Pelé: Birth of a Legend', '现代','大陆','国语','134','闫非',' 杰夫·泽姆巴利斯特 / 迈克尔·泽姆巴利斯特/凯文·德·保拉 /','喜剧','2018-08-10','球王贝利','3d','keyword','keychar','5','传奇的诞生杰夫·泽姆巴利斯特喜剧爱情 冒险 ','43','');
INSERT INTO `spider_movie` VALUES (NULL, '三只小猪2', 'Hello, Mr. Billionaire', '现代','大陆','国语','134','闫非',' 刘炜/王晓彤 ','动画','2018-08-10','农村励志大叔，遇到三只改变命运的小猪','2D','keyword','keychar','5','动画 少儿 三只小猪2 冒险 刘炜/王晓彤snazhixiiaozhu','43','');
INSERT INTO `spider_movie` VALUES (NULL, '未来机器城', 'Next Gen', '现代','大陆','国语','134','闫非',' 彭大魔/沈腾','动画 科幻 冒险','2018-08-10','终结孤单','3D','keyword','keychar','5','未来机器城动画 科幻 冒险 wielaijiqicheng','43','');
-- ----------------------------
-- Table structure for `spider_movie_pic`
-- ----------------------------
DROP TABLE IF EXISTS `spider_movie_pic`;
CREATE TABLE `spider_movie_pic` (
  `pid` int(11) NOT NULL auto_increment,
  `movie_id` int(11) NOT NULL,
  `sm` int(11) NOT NULL,
  `md` varchar(32) default NULL, 
  PRIMARY KEY  (`pid`)
); 
-- ----------------------------
-- Records of spider_movie_pic
-- ----------------------------
INSERT INTO `spider_movie_pic` VALUES (1, 1, 'img/index/hot-1-1.jpg', 'img/index/hot-1-1.jpg');
INSERT INTO `spider_movie_pic` VALUES (NULL, 1, 'img/product/sm/yi-1-1.png', 'img/product/md/yi-1-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 1, 'img/product/sm/yi-1-3.png', 'img/product/md/yi-1-3.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 1, 'img/product/sm/yi-1-4.png', 'img/product/md/yi-1-4.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 1, 'img/product/sm/yi-1-5.png', 'img/product/md/yi-1-5.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 1, 'img/product/sm/yi-1-6.png', 'img/product/md/yi-1-6.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 1, 'img/product/sm/yi-1-7.png', 'img/product/md/yi-1-7.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 1, 'img/product/sm/yi-1-8.png', 'img/product/md/yi-1-8.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 1, 'img/product/sm/yi-1-9.png', 'img/product/md/yi-1-9.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 1, 'img/product/sm/yi-1-11.png', 'img/product/md/yi-1-10.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 1, 'img/product/sm/yi-1-12.png', 'img/product/md/yi-1-12.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 1, 'img/product/sm/yi-1-13.png', 'img/product/md/yi-1-13.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 1, 'img/product/sm/yi_1-14.png', 'img/product/md/yi-1-14.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 2, '', 'img/index/hot-1.jpg');
INSERT INTO `spider_movie_pic` VALUES (NULL, 2, '', 'img/product/md/ge-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 2, '', 'img/product/md/ge-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 2, '', 'img/product/md/ge-2.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 2, '', 'img/product/md/ge-3.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 2, '', 'img/product/md/ge-4.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 2, '', 'img/product/md/ge-5.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 2, '', 'img/product/md/ge-6.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 2, '', 'img/product/md/ge-7.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 3, '', 'img/index/hot-2.jpg');
INSERT INTO `spider_movie_pic` VALUES (NULL, 3, '', 'img/product/md/shix-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 3, '', 'img/product/md/shix-2.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 4, '', 'img/index/hot-3.jpg');
INSERT INTO `spider_movie_pic` VALUES (NULL, 4, '', 'img/product/md/jl-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 4, '', 'img/product/md/jl-2.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 4, '', 'img/product/md/jl-3.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 5, '', 'img/index/hot-4.jpg');
INSERT INTO `spider_movie_pic` VALUES (NULL, 5, '', 'img/product/md/yr-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 5, '', 'img/product/md/yr-2.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 6, '', 'img/index/hot-5.jpg');
INSERT INTO `spider_movie_pic` VALUES (NULL, 6, '', 'img/product/md/lang-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 6, '', 'img/product/md/lang-2.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 7, '', 'img/index/hot-6.jpg');
INSERT INTO `spider_movie_pic` VALUES (NULL, 7, '', 'img/product/md/sh-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 7, '', 'img/product/md/sh-2.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 8, '', 'img/index/hot-changci1.jpg');
INSERT INTO `spider_movie_pic` VALUES (NULL, 8, '', 'img/product/md/die-2.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 8, '', 'img/product/md/die-2.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 9, '', 'img/index/hot-changci3.jpg');
INSERT INTO `spider_movie_pic` VALUES (NULL, 9, '', 'img/product/md/xh-2.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 9, '', 'img/product/md/xh-2.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 10, '', 'img/product/md/fantan-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 11, '', 'img/product/md/dao-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 12, '', 'img/product/md/baizhe-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 13, '', 'img/product/md/chuanqi-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 14, '', 'img/product/md/zhu-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 15, '', 'img/product/md/jiqi-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 16, '', 'img/product/md/fantan-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 17, '', 'img/product/md/dao-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 18, '', 'img/product/md/baizhe-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 19, '','img/product/md/chuanqi-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 20, '', 'img/product/md/zhu-1.png');
INSERT INTO `spider_movie_pic` VALUES (NULL, 21, '', 'img/product/md/jiqi-1.png');




-- ----------------------------
-- Table structure for `spider_family`
-- ----------------------------
DROP TABLE IF EXISTS `spider_family`;
CREATE TABLE `spider_family` (
  `fid` int(11) NOT NULL auto_increment,
  `fname` varchar(8) default NULL,
  PRIMARY KEY  (`fid`)
); 
-- ----------------------------
-- Records of spider_family
-- ----------------------------
INSERT INTO `spider_family` VALUES (1, '喜剧');
INSERT INTO `spider_family` VALUES (2, '动作' );
INSERT INTO `spider_family` VALUES (3, '爱情');
INSERT INTO `spider_family` VALUES (4, '冒险');
INSERT INTO `spider_family` VALUES (5, '冒险');
-- ----------------------------
-- Table structure for `spider_movie_theater`
-- ----------------------------
DROP TABLE IF EXISTS `spider_movie_theater`;
CREATE TABLE `spider_movie_theater` (          
  `mtid` int(11) NOT NULL auto_increment,
  `mtname` varchar(32) default NULL,
  `mt_address` varchar(64) default NULL,
  `mt_intr` varchar(64) default NULL,
  `pic` varchar(32) default NULL,
  PRIMARY KEY  (`mtid`)
); 
INSERT INTO `spider_movie_theater` VALUES (1, '左岸国际电影城(松江沃尔玛店)', '地址：【淮海中路99号大上海时代广场6楼（柳林路口）】淮海中路99号大上海时代广场6楼(柳林路口)', '当前四部影片正在热映中','img/index/movie-theater-4.jpg');
INSERT INTO `spider_movie_theater` VALUES (2, '青春光线电影院
', '地址：【滨河路乙1号雍和航星园74-76号楼】滨河路乙1号雍和航星园74-76号楼', '当前三部影片正在热映中','img/index/movie-theater-3.jpg');

-- ----------------------------
-- Records of spider__hall
-- ----------------------------
DROP TABLE IF EXISTS `spider_hall`;
CREATE TABLE `spider_hall` (
  `hid` int(11) NOT NULL auto_increment,
  `movie_theater_id` int(11) NOT NULL,
  `hall_name` varchar(32) default NULL,
  `row` varchar(16) default NULL,
  `column` varchar(16) default NULL,
  PRIMARY KEY  (`hid`)
); 
INSERT INTO `spider_hall` VALUES (NULL, 1,'一号厅','6','4');
INSERT INTO `spider_hall` VALUES (NULL, 1,'2号厅-双色激光厅','6','4');
INSERT INTO `spider_hall` VALUES (NULL, 1,'三号厅','6','4');
INSERT INTO `spider_hall` VALUES (NULL, 1,'四号厅','6','4');
INSERT INTO `spider_hall` VALUES (NULL, 1,'LUXE巨幕厅','6','4');
INSERT INTO `spider_hall` VALUES (NULL, 1,'2号厅-双色激光厅','4','4');
INSERT INTO `spider_hall` VALUES (NULL, 1,'九号厅','5','4');
INSERT INTO `spider_hall` VALUES (NULL, 1,'七号厅','6','4');
INSERT INTO `spider_hall` VALUES (NULL, 2,'小剧场激光','7','4');
INSERT INTO `spider_hall` VALUES (NULL, 2,'4号激光厅','8','4');
INSERT INTO `spider_hall` VALUES (NULL, 2,'1号厅-IMAX厅','5','4');
INSERT INTO `spider_hall` VALUES (NULL, 2,'3号厅-IMAX厅','5','4');
INSERT INTO `spider_hall` VALUES (NULL, 2,'小剧场激光','5','4');
INSERT INTO `spider_hall` VALUES (NULL, 2,'2号激光厅','5','4');
INSERT INTO `spider_hall` VALUES (NULL, 2,'1号厅-IMAX厅','5','4');
INSERT INTO `spider_hall` VALUES (NULL, 2,'3号厅-IMAX厅','5','4');
-- ----------------------------
-- Records of spider__hall_table
-- ----------------------------
DROP TABLE IF EXISTS `spider_hall_table`;
CREATE TABLE `spider_hall_table` (
  `hallt` int(11) NOT NULL auto_increment,
  `hid` int(11) NOT NULL,
  `tab` varchar(16) default NULL,
  PRIMARY KEY  (`hallt`)
); 
INSERT INTO `spider_hall_table` VALUES (NULL, 6,"spider6");
-- ----------------------------
-- Records of spider6
-- ----------------------------
DROP TABLE IF EXISTS `spider6`;
CREATE TABLE `spider6` (
  `row` int(11) NOT NULL auto_increment,
  `colum1` varchar(32) default Null,
  `colum2` varchar(32) default NULL,
  `colum3` varchar(32) default NULL,
  `colum4` varchar(32) default NULL,
  PRIMARY KEY  (`row`)
); 
INSERT INTO `spider6` VALUES (NUll,"1","0","0","1");
INSERT INTO `spider6` VALUES (NUll,"1","1","1","1");
INSERT INTO `spider6` VALUES (NUll,"1","1","1","1");
INSERT INTO `spider6` VALUES (NUll,"1","1","1","1");
-- ----------------------------
-- Records of spider__paipain
-- ----------------------------
DROP TABLE IF EXISTS `spider_paipian`;
CREATE TABLE `spider_paipian`(
  `pid` int(11) NOT NULL auto_increment,
  `movie_id` int(11) NOT NULL ,
  `movie_theater_id` int(11) NOT NULL,
  `hall_id` int(11) NOT NULL ,
  `time` varchar(16) default NULL,
  PRIMARY KEY  (`pid`)
); 
INSERT INTO `spider_paipian` VALUES (NULL, 1,1,2,'4:00');
INSERT INTO `spider_paipian` VALUES (NULL, 1,1,1,'4:00');
INSERT INTO `spider_paipian` VALUES (NULL, 2,1,7,'12:00');
INSERT INTO `spider_paipian` VALUES (NULL, 3,1,2,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 4,1,8,'9:00');
INSERT INTO `spider_paipian` VALUES (NULL, 5,1,1,'4:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 6,1,5,'12:00');
INSERT INTO `spider_paipian` VALUES (NULL, 7,1,2,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 8,1,4,'9:00');
INSERT INTO `spider_paipian` VALUES (NULL, 9,1,8,'4:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 10,1,1,'12:00');
INSERT INTO `spider_paipian` VALUES (NULL, 11,1,4,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 12,1,2,'9:00');
INSERT INTO `spider_paipian` VALUES (NULL, 13,1,3,'4:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 14,1,5,'12:00');
INSERT INTO `spider_paipian` VALUES (NULL, 15,1,6,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 16,1,2,'9:00');
INSERT INTO `spider_paipian` VALUES (NULL, 17,1,4,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 18,1,2,'9:00');
INSERT INTO `spider_paipian` VALUES (NULL, 19,1,3,'4:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 20,1,5,'12:00');
INSERT INTO `spider_paipian` VALUES (NULL, 21,1,6,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 22,1,2,'9:00');
INSERT INTO `spider_paipian` VALUES (NULL, 1,2,1,'4:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 2,2,7,'12:00');
INSERT INTO `spider_paipian` VALUES (NULL, 3,2,2,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 4,2,8,'9:00');
INSERT INTO `spider_paipian` VALUES (NULL, 5,2,1,'4:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 6,2,5,'12:00');
INSERT INTO `spider_paipian` VALUES (NULL, 7,2,2,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 8,2,4,'9:00');
INSERT INTO `spider_paipian` VALUES (NULL, 9,2,8,'4:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 10,2,1,'12:00');
INSERT INTO `spider_paipian` VALUES (NULL, 11,1,4,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 12,2,2,'9:00');
INSERT INTO `spider_paipian` VALUES (NULL, 13,1,3,'4:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 14,2,5,'12:00');
INSERT INTO `spider_paipian` VALUES (NULL, 15,2,6,'8:25');
INSERT INTO `spider_paipian` VALUES (NULL, 16,2,2,'9:00');
INSERT INTO `spider_paipian` VALUES (NULL, 17,2,4,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 18,2,2,'9:00');
INSERT INTO `spider_paipian` VALUES (NULL, 19,2,3,'4:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 20,2,5,'12:00');
INSERT INTO `spider_paipian` VALUES (NULL, 21,2,6,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 22,2,2,'9:00');
INSERT INTO `spider_paipian` VALUES (NULL, 19,1,3,'11:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 20,1,5,'22:00');
INSERT INTO `spider_paipian` VALUES (NULL, 21,1,6,'5:00');
INSERT INTO `spider_paipian` VALUES (NULL, 22,1,2,'19:00');
INSERT INTO `spider_paipian` VALUES (NULL, 1,2,1,'14:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 2,2,7,'19:54');
INSERT INTO `spider_paipian` VALUES (NULL, 3,2,2,'24:00');
INSERT INTO `spider_paipian` VALUES (NULL, 4,2,8,'17:25');
INSERT INTO `spider_paipian` VALUES (NULL, 18,1,2,'9:24');
INSERT INTO `spider_paipian` VALUES (NULL, 19,1,3,'4:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 20,1,5,'12:11');
INSERT INTO `spider_paipian` VALUES (NULL, 21,1,6,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 22,1,2,'21:00');
INSERT INTO `spider_paipian` VALUES (NULL, 1,2,1,'20:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 2,2,7,'12:00');
INSERT INTO `spider_paipian` VALUES (NULL, 3,2,2,'8:30');
INSERT INTO `spider_paipian` VALUES (NULL, 4,2,8,'9:25');
INSERT INTO `spider_paipian` VALUES (NULL, 5,2,1,'4:55' );
INSERT INTO `spider_paipian` VALUES (NULL, 6,2,5,'12:45');

INSERT INTO `spider_paipian` VALUES (NULL, 2,1,7,'13:00');
INSERT INTO `spider_paipian` VALUES (NULL, 3,1,4,'6:00');
INSERT INTO `spider_paipian` VALUES (NULL, 4,1,8,'8:00');
INSERT INTO `spider_paipian` VALUES (NULL, 5,1,6,'14:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 6,1,3,'22:00');
INSERT INTO `spider_paipian` VALUES (NULL, 7,1,5,'18:00');
INSERT INTO `spider_paipian` VALUES (NULL, 8,1,6,'19:00');
INSERT INTO `spider_paipian` VALUES (NULL, 9,1,1,'14:00' );

INSERT INTO `spider_paipian` VALUES (NULL, 19,1,2,'14:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 20,1,3,'2:11');
INSERT INTO `spider_paipian` VALUES (NULL, 21,1,4,'18:00');
INSERT INTO `spider_paipian` VALUES (NULL, 22,1,3,'2:00');
INSERT INTO `spider_paipian` VALUES (NULL, 1,2,7,'13:00' );
INSERT INTO `spider_paipian` VALUES (NULL, 2,2,2,'1:00');
INSERT INTO `spider_paipian` VALUES (NULL, 3,2,8,'18:30');
INSERT INTO `spider_paipian` VALUES (NULL, 4,2,1,'19:25');
INSERT INTO `spider_paipian` VALUES (NULL, 5,2,3,'14:55' );
INSERT INTO `spider_paipian` VALUES (NULL, 6,2,5,'6:45');
-- ----------------------------
-- Table structure for `spider_user`
-- ----------------------------
DROP TABLE IF EXISTS `spider_user`;
CREATE TABLE `spider_user` (
  `uid` int(11) NOT NULL auto_increment,
  `uname` varchar(32) default NULL,
  `upwd` varchar(32) default NULL,
  `email` varchar(64) default NULL,
  `phone` varchar(16) default NULL,
  `avatar` varchar(128) default NULL,
  `user_name` varchar(32) default NULL,
  `gender` int(11) default NULL,
  `jifen` int(11) default NULL,
  `zhanghu`  int(11) default NULL,
  `coupon` int(11) default NULL,
  `isLogin` varChar(11) default Null,
  PRIMARY KEY  (`uid`)
) ;
-- ----------------------------
-- Records of spider_user
-- ----------------------------
INSERT INTO `spider_user` VALUES ('1', 'dingding', '123456', 'ding@qq.com', '13511011000', 'img/avatar/default.png', '丁春秋', '0','11','2','0','false');
INSERT INTO `spider_user` VALUES ('2', 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '当当喵', '1','11','2','0','false');
INSERT INTO `spider_user` VALUES ('3','doudou','123456','dou@qq.com', '13501234569','img/avatar/default.png', '窦志强', '1','44','45','9','false');
INSERT INTO `spider_user` VALUES ('4', 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0','1','44','45''9','false');

-- ----------------------------
-- Table structure for `spider_user_comment`
-- ----------------------------
DROP TABLE IF EXISTS `spider_user_comment`;
CREATE TABLE `spider_user_comment` (
  `cid` int(11) NOT NULL auto_increment,
  `mid` int(11) default NULL,
  `user_name` varchar(32) default NULL,
  `content` varchar(360) default NULL,
  `movie` varchar(64) default NULL,
  `time` varchar(16) default NULL,
  PRIMARY KEY  (`cid`)
); 
INSERT INTO `spider_user_comment` VALUES ('9', '9','dingding', '这场“花钱也累”的自嗨白日梦，显然比当年的《夏洛特烦恼》更疯狂更荒诞，也更深入对人性的讨伐。沈腾的喜剧天赋真的无法复刻，无论为己谋利还是替人圆梦，每一个笑点都打磨得恰到好处', '西红柿首富', '2018-8-2');
INSERT INTO `spider_user_comment` VALUES ('2', '3','dangdang', '不错不错', '大师兄','2018-7-31');
INSERT INTO `spider_user_comment` VALUES ('3','2', 'doudou', '还行吧', '快把我哥带走','2018-8-31');
INSERT INTO `spider_user_comment` VALUES ('4','7','yaya', '有趣', '海底历险记','2018-9-9');
INSERT INTO `spider_user_comment` VALUES ('5','1', 'doudou', '极限挑战，这就是命', '一出好戏','2018-8-31');
INSERT INTO `spider_user_comment` VALUES ('6','4','yaya', '有趣', '精灵旅社','2018-9-9');


-- ----------------------------
-- Table structure for `spider_order`
-- ----------------------------
DROP TABLE IF EXISTS `spider_order`;
CREATE TABLE `spider_order` (
  `aid` int(11) NOT NULL auto_increment,
  `user_id` int(11) default NULL,
  `address_id` int(11) default NULL,
  `status` int(11) default NULL,
  `order_time` bigint(20) default NULL,
  `pay_time` bigint(20) default NULL,
  `deliver_time` bigint(20) default NULL,
  `received_time` bigint(20) default NULL,
  `count` int(11),
  `amount` int(11),
  PRIMARY KEY  (`aid`)
);
-- ----------------------------
-- Records of spider_order
-- ----------------------------

-- ----------------------------
-- Table structure for `spider_order_detail`
-- ----------------------------
DROP TABLE IF EXISTS `spider_detail`;
CREATE TABLE `spider_detail`(
  `did` int(11) NOT NULL auto_increment,
  `order_id` int(11) default NULL,
  `order_amount` varchar(128) default NULL,
  `order_count` int(11) default NULL,
  `order_status` varChar(16) default NULL,
  `user_phone` int(11) default NULL,
  PRIMARY KEY  (`did`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- ----------------------------
-- Records of spider_order_detail
-- ----------------------------