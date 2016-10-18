<?php

namespace AppBundle\Twig\Extension;

use AppBundle\Managers\AppStateManager;

/**
 * AppStateExtension
 *
 * @package AppBundle\Twig\Extension
 * @author Miloš Danilov <milosdanilov@gmail.com>
 */
class AppStateExtension extends \Twig_Extension implements \Twig_Extension_GlobalsInterface
{
    /**
     * @var \AppBundle\Managers\AppStateManager
     */
    protected $appState;

    /**
     * AppStateExtension constructor.
     * @param AppStateManager $appState
     */
    public function __construct(AppStateManager $appState)
    {
        $this->appState = $appState;
    }

    /**
     * {@inheritdoc}
     */
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
