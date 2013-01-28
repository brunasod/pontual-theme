jQuery(function(){
	jQuery(".quadro_produto #conteudo").hide();
	
	var produto;
	var hash = window.location.hash;
	if (hash !=""){
	  produto = jQuery(hash).html(); // se for passado index.htm#noticia3 ela devolve #noticia3
	  jQuery(".quadro_produto .abas li a[href=" + hash + "]").parent().addClass("ativo");    
	}else{
	  produto = jQuery(".quadro_produto #conteudo div:first-child").html();      
	  jQuery(".quadro_produto .abas li:first-child").addClass("ativo"); 
	  jQuery(".quadro_produto #mostra_produto").append("<div>" + produto + "</div>").find("div").show();
	}
	jQuery(".quadro_produto .abas li a").click(function(){
	  jQuery(".quadro_produto .abas li").removeClass("ativo");
	  jQuery(this).parent().addClass("ativo");
	  var ancora = jQuery(this).attr("href");
	  var nome = ancora.substr(1, ancora.length);
	  produto = jQuery(".quadro_produto #conteudo div[id=" + nome + "]").html();
	  jQuery(".quadro_produto #mostra_produto").empty();
	  jQuery(".quadro_produto #mostra_produto").append("<div>" + produto + "</div>").find("div").show();
	  return false;
	});
	
	jQuery(".box_filiais #quadro_filiais #conteudo").hide();
	
	var filiais;  
	filiais = jQuery(".box_filiais #quadro_filiais #conteudo div:first-child").html(); 
	jQuery(".box_filiais #quadro_filiais #mostra_filial").append("<div>" + filiais + "</div>").find("div").show();
	jQuery(".box_filiais #escolha").click(function(){
		var selecionado = jQuery(".box_filiais #quadro_filiais .seletor_filiais select option:selected").attr("value");
		var nome = "filial" + selecionado;
	  produto = jQuery(".box_filiais #quadro_filiais #conteudo div[id=" + nome + "]").html();
	  jQuery(".box_filiais #quadro_filiais #mostra_filial").empty();
	  jQuery(".box_filiais #quadro_filiais #mostra_filial").append("<div>" + produto + "</div>").find("div").show();
	  return false;
	});
});