const DUCKS = ['duck_default', 'duck_purple', 'duck_blue'];

function createStandingAnimation(duck, scene) {
  var frameNames = [{
    frame: `${duck}/standing/${duck}.png`,
    key: 'ducks',
  }];

  scene.anims.create({ key: `${duck}_standing`, frames: frameNames });
}

function createWalkingAnimation(duck, scene) {
  var frameNames = scene.anims.generateFrameNames('ducks', {
    start: 1,
    end: 1,
    zeroPad: 3,
    prefix: `${duck}/walk/${duck}_walk_`,
    suffix: '.png',
  });

  scene.anims.create({
    key: `${duck}_walk`,
    frames: frameNames,
    frameRate: 5,
    repeat: -1,
  });
}

function createRunningAnimation(duck, scene) {
  var frameNames = scene.anims.generateFrameNames('ducks', {
    start: 1,
    end: 1,
    zeroPad: 3,
    prefix: `${duck}/run/${duck}_run_`,
    suffix: '.png',
  });

  scene.anims.create({
    key: `${duck}_run`,
    frames: frameNames,
    frameRate: 10,
    repeat: -1,
  });
}

function createJumpAnimation(duck, scene) {
  var frameNames = scene.anims.generateFrameNames('ducks', {
    start: 1,
    end: 1,
    zeroPad: 3,
    prefix: `${duck}/jump/${duck}_jump_`,
    suffix: '.png',
  });

  scene.anims.create({
    key: `${duck}_jump`,
    frames: frameNames,
    frameRate: 10,
    repeat: 0,
  });
}

function createDieAnimation(duck, scene) {
  var frameNames = scene.anims.generateFrameNames('ducks', {
    start: 1,
    end: 1,
    zeroPad: 3,
    prefix: `${duck}/die/${duck}_die_`,
    suffix: '.png',
  });

  scene.anims.create({
    key: `${duck}_die`,
    frames: frameNames,
    frameRate: 10,
    repeat: 0,
  });
}


export default function animationsFactory(scene) {
  DUCKS.forEach(duck => {
    createWalkingAnimation(duck, scene);
    createRunningAnimation(duck, scene);
    createJumpAnimation(duck, scene);
    createDieAnimation(duck, scene);
    createStandingAnimation(duck, scene);
  });
}
