<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AccountController extends Controller
{
    /**
     * @Route("/account/new", name="new_account")
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function newAccountAction()
    {
        return $this->render(':account:new.html.twig');
    }
}
