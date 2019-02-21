// ==Bookmarklet==
// @name HCmed Plugin
// @namespace github.com/leogama
// @author Leonardo Gama - leonardo.gama@fm.usp.br
// @description Adiciona algumas funcionalidades à página de listagem de exames do HCmed
//
// @script https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js
// @script https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/pt-br.js
// @script https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js
// @script https://cdnjs.cloudflare.com/ajax/libs/Dynatable/0.3.1/jquery.dynatable.min.js
// ==/Bookmarklet==

var $table = $('#ResultadosExames');


// Formata tabela
var $badRow = $table.find('> tbody > tr:last-child');
if (($badRow.children()).length === 1) $badRow.remove();

var $thead = $('<thead>').prependTo($table);
$thead.append($table.find('> tbody > tr:first-child'));

var $headers = $thead.find('th');
$headers.text(function() {
    return $(this).text().replace(':', '');
});

$headers.first().attr('data-dynatable-no-sort', true)
        .next().attr('data-dynatable-sorts', 'date')  // sortable by 'date'
        .next().attr('data-dynatable-no-sort', true);
$headers.last().attr('data-dynatable-no-sort', true);


// Filtra por tipo de exame
var options = new Set();
$table.find('tbody td:nth-of-type(4)').each(function() {
    options.add($(this).text().trim());
});
var $select = $('<select id="select-nome" name="nome">').append('<option>');
options.forEach(function(value) {
    $select.append($('<option>' + value + '</option>'));
});
var $span = $('<span>&nbsp;Tipo de exame:&nbsp;</span>');
$span.append($select).insertBefore($('#frmResultadosExames'));


// Transforma em tabela dinâmica
function dateReader(cell, record) {
    var $cell = $(cell);
    record['date'] = moment($cell.text(), 'DD-MM-YYYY HH-mm-ss').toISOString();
    return $cell.html();
}

var dynatable = $table.dynatable({
    features: {
        paginate: false
    },
    inputs: {
        queries: $('#select-nome'),
        searchText: 'Filtrar: '
    },
    readers: {
        dataDeCadastro: dateReader
    }
});

$('#dynatable-search-ResultadosExames').after($span);
