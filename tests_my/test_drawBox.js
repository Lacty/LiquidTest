function TestDrawBox() {
  // setup ground
  var body = new b2BodyDef();
  var ground = world.CreateBody(body);
  
  var edge = new b2EdgeShape();
  edge.Set(new b2Vec2(-20, 0), new b2Vec2(20, 0));
  
  var fd = new b2FixtureDef();
  fd.shape = edge;
  ground.CreateFixtureFromDef(fd);
}