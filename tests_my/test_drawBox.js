function TestDrawBox() {
  // setup ground
  var body = new b2BodyDef();
  var ground = world.CreateBody(body);
  
  // Edge生成
  var edge = new b2EdgeShape();
  edge.Set(new b2Vec2(-20, 0), new b2Vec2(20, 0));
  
  var fd = new b2FixtureDef();
  fd.shape = edge;
  ground.CreateFixtureFromDef(fd);
  
  // Box生成
  var box = new b2PolygonShape();
  box.SetAsBoxXY(0, 0);
  
  fd = new b2FixtureDef();
  fd.shape = box;
  ground.CreateFixtureFromDef(fd);
  
  bd = new b2BodyDef();
  bd.type = b2_dynamicBody;
  bd.position.Set(0, 3);
  var attachment = world.CreateBody(bd);

  box.SetAsBoxXY(0.5, 2);
  attachment.CreateFixtureFromShape(box, 2);
}