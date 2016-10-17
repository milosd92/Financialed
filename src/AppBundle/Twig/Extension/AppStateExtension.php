<?php

namespace AppBundle\Twig\Extension;

use AppBundle\Managers\AppStateManager;

class AppStateExtension extends \Twig_Extension implements \Twig_Extension_GlobalsInterface
{
    protected $appState;

    public function __construct(AppStateManager $appState)
    {
        $this->appState = $appState;
    }

    public function getGlobals()
    {
        return array(
            'appstate' => $this->appState
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'appstate';
    }
}
