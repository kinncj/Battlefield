'use strict';

import Objectives from './Objectives';

class Target
{
    constructor(name, action)
    {
        this.name   = name;
        this.action = action;

        Objectives[name] = action;
    }
}

export default Target;
