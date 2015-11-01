function TestDrawBox() {
  // setup ground
  var body = new b2BodyDef();
  var ground = world.CreateBody(body);  // １度目
  
  // Edge生成
  var edge = new b2EdgeShape();
  // 始点、終点を指定
  edge.Set(new b2Vec2(-20, 0), new b2Vec2(20, 0));
  ground.CreateFixtureFromShape(edge, 0);
  
  
  // Box生成
  var box = new b2PolygonShape();
  // サイズを指定
  box.SetAsBoxXY(2, 2);
  // 位置を指定
  body.position.Set(0, 5);

  ground = world.CreateBody(body);       // ２度目
  ground.CreateFixtureFromShape(box, 0); // 第２引数が何を示しているか不明
                                         // 今のところ何を指定しても変化なし
}