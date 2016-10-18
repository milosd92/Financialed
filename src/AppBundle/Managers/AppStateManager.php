<?php

namespace AppBundle\Managers;

/**
 * AppStateManager
 *
 * Represents the data that is avalible globaly.
 *
 * @package AppBundle\Managers
 * @author Miloš Danilov <milosdanilov@gmail.com>
 */
class AppStateManager
{
    /**
     * Returns the full name of the loged-in user.
     *
     * @return string
     */
    public function getUser()
    {
        return "John Doe";
    }
}