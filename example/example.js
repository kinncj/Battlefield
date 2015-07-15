'use strict';

import BattleField from '../dist/Battlefield';

new BattleField.Target('john', function(bullet){console.log(bullet);});
new BattleField.Target('snow', function(bullet){console.log(bullet.propellant);});

var gun = new BattleField.Gun();

gun.shoot('john');
gun.shoot('snow', new BattleField.Bullet({'hello':['world']}));
