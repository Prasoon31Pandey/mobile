( function( window, document ) {
  function mobile_app_hub_keepFocusInMenu() {
    document.addEventListener( 'keydown', function( e ) {
      const mobile_app_hub_nav = document.querySelector( '.sidenav' );
      if ( ! mobile_app_hub_nav || ! mobile_app_hub_nav.classList.contains( 'open' ) ) {
        return;
      }
      const elements = [...mobile_app_hub_nav.querySelectorAll( 'input, a, button' )],
        mobile_app_hub_lastEl = elements[ elements.length - 1 ],
        mobile_app_hub_firstEl = elements[0],
        mobile_app_hub_activeEl = document.activeElement,
        tabKey = e.keyCode === 9,
        shiftKey = e.shiftKey;
      if ( ! shiftKey && tabKey && mobile_app_hub_lastEl === mobile_app_hub_activeEl ) {
        e.preventDefault();
        mobile_app_hub_firstEl.focus();
      }
      if ( shiftKey && tabKey && mobile_app_hub_firstEl === mobile_app_hub_activeEl ) {
        e.preventDefault();
        mobile_app_hub_lastEl.focus();
      }
    } );
  }
  mobile_app_hub_keepFocusInMenu();
} )( window, document );