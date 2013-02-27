AUI().ready(
	'liferay-hudcrumbs', 'liferay-navigation-interaction',
	function(A) {
		var navigation = A.one('#navigation');

		if (navigation) {
			navigation.plug(Liferay.NavigationInteraction);
		}

		var siteBreadcrumbs = A.one('.site-breadcrumbs');

		if (siteBreadcrumbs) {
			siteBreadcrumbs.plug(A.Hudcrumbs);
		}
	}
);


AUI().ready('aui-carousel', function(A) {

       if (A.all( '.home_banner #carrossel').size() > 0){
               
               new A.Carousel(
                       {
                               intervalTime: 1,
                               contentBox: '.home_banner #carrossel',
                               itemSelector: '.rotativo',
                               activeIndex: '0',
                               height: 365,
                               width: 60
                       }
               )
               .render();
       }
});

AUI().ready('event', function(A) {
  AUI().one('#menu-rastreamento .quadro').hide();
  AUI().one('#menu-rastreamento').on('mouseover', function(A) {
    AUI().one('#menu-rastreamento .quadro').show();
  });
  AUI().one('#menu-rastreamento').on('mouseout', function(A) {
    AUI().one('#menu-rastreamento .quadro').hide();
  });
  AUI().one('#menu-cotacao .quadro').hide();
  AUI().one('#menu-cotacao').on('mouseover', function(A) {
    AUI().one('#menu-cotacao .quadro').show();
  });
  AUI().one('#menu-cotacao').on('mouseout', function(A) {
    AUI().one('#menu-cotacao .quadro').hide();
  });
});

