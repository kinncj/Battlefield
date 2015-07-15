'use strict';

import Target     from './Target';
import Objectives from './Objectives';

class Muzzle
{
    static discharge(target, bullet)
    {
        var objective = Objectives[target];

        if(objective) {
            objective(bullet);
        }
    }
}

export default Muzzle;
