# HCmed Plugin
Esta é uma pequena coleção de [bookmarklets](https://pt.wikipedia.org/wiki/Bookmarklet) que adicionam algumas facilidades às páginas do sistema HCmed.

## Instalação
Salve os links abaixo na *Barra de Favoritos* do seu navegador:

- **[Resultado da Busca](javascript:(function()%7B%22use%20strict%22%3Bfunction%20callback()%7Bfunction%20e()%7Bfunction%20e()%7Bfunction%20e()%7Bvar%20e%3D%24(%22%23ResultadosExames%22)%2Ct%3De.find(%22%3E%20tbody%20%3E%20tr%3Alast-child%22)%3B1%3D%3D%3Dt.children().length%26%26t.remove()%3Bvar%20a%3D%24(%22%3Cthead%3E%22).prependTo(e)%3Ba.append(e.find(%22%3E%20tbody%20%3E%20tr%3Afirst-child%22))%3Bvar%20n%3Da.find(%22th%22)%3Bn.text(function()%7Breturn%20%24(this).text().replace(%22%3A%22%2C%22%22)%7D)%2Cn.first().attr(%22data-dynatable-no-sort%22%2C!0).next().attr(%22data-dynatable-sorts%22%2C%22date%22).next().attr(%22data-dynatable-no-sort%22%2C!0)%2Cn.last().attr(%22data-dynatable-no-sort%22%2C!0)%3Bvar%20d%3Dnew%20Set%3Be.find(%22tbody%20td%3Anth-of-type(4)%22).each(function()%7Bd.add(%24(this).text().trim())%7D)%3Bvar%20s%3D%24('%3Cselect%20id%3D%22select-nome%22%20name%3D%22nome%22%3E').append(%22%3Coption%3E%22)%3Bd.forEach(function(e)%7Bs.append(%24(%22%3Coption%3E%22%2Be%2B%22%3C%2Foption%3E%22))%7D)%3Bvar%20r%3D%24(%22%3Cspan%3E%26nbsp%3BTipo%20de%20exame%3A%26nbsp%3B%3C%2Fspan%3E%22)%3Br.append(s).insertBefore(%24(%22%23frmResultadosExames%22))%3Be.dynatable(%7Bfeatures%3A%7Bpaginate%3A!1%7D%2Cinputs%3A%7Bqueries%3A%24(%22%23select-nome%22)%2CsearchText%3A%22Filtrar%3A%20%22%7D%2Creaders%3A%7BdataDeCadastro%3Afunction(e%2Ct)%7Bvar%20a%3D%24(e)%3Breturn%20t.date%3Dmoment(a.text()%2C%22DD-MM-YYYY%20HH-mm-ss%22).toISOString()%2Ca.html()%7D%7D%7D)%3B%24(%22%23dynatable-search-ResultadosExames%22).after(r)%7Dvar%20t%3Ddocument.createElement(%22script%22)%3Bt.addEventListener%3Ft.addEventListener(%22load%22%2Ce%2C!1)%3At.readyState%26%26(t.onreadystatechange%3De)%2Ct.src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2FDynatable%2F0.3.1%2Fjquery.dynatable.min.js%22%2Cdocument.body.appendChild(t)%7Dvar%20t%3Ddocument.createElement(%22script%22)%3Bt.addEventListener%3Ft.addEventListener(%22load%22%2Ce%2C!1)%3At.readyState%26%26(t.onreadystatechange%3De)%2Ct.src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fjquery%2F3.3.1%2Fjquery.slim.min.js%22%2Cdocument.body.appendChild(t)%7Dvar%20t%3Ddocument.createElement(%22script%22)%3Bt.addEventListener%3Ft.addEventListener(%22load%22%2Ce%2C!1)%3At.readyState%26%26(t.onreadystatechange%3De)%2Ct.src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fmoment.js%2F2.24.0%2Flocale%2Fpt-br.js%22%2Cdocument.body.appendChild(t)%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.addEventListener%3Fs.addEventListener(%22load%22%2Ccallback%2C!1)%3As.readyState%26%26(s.onreadystatechange%3Dcallback)%2Cs.src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2Fmoment.js%2F2.24.0%2Fmoment.min.js%22%2Cdocument.body.appendChild(s)%3B%7D)())**
    - Ordena exames por qualquer coluna
    - Filtra por texto (exemplos: "ferr", "01/2019")
    - Filtra por tipo de exame

## Utilização
1. Espere a página do HCmed terminar de carregar
2. Clique no botão correspondente na *Barra de Favoritos*
3. Faça bom uso! 😎

## Feedback
Encontrou algum problema? Tem uma sugestão? Escreva para leonardo.gama@usp.br

---
**Desenvolvido por [Leonardo Gama](https://about.me/leogama) em momentos de tédio.**
