'use strict';

import Target from './Target';
import Bullet from './Bullet';
import Muzzle from './Muzzle';

class Gun
{
    shoot(target, bullet)
    {
        if(false === (bullet instanceof Bullet)) {
            bullet = new Bullet(bullet);
        }

        Muzzle.discharge(target, bullet);
    }
}

export default Gun;
