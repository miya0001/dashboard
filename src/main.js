const api = 'https://api.github.com'
const org = 'wp-cli'

$.ajax( {
  url: api + '/orgs/' + org + '/repos',
  data: { per_page: 100 },
  dataType: 'json'
} ).done( function( data ) {
  riot.mount( 'repos', { repos: data } )
} );

$( window ).on( 'hashchange', function() {
  const repo = location.hash.slice( 1 );
  $.ajax( {
    url: api + '/repos/' + org + '/' + repo + '/issues',
    data: { per_page: 100 },
    dataType: 'json'
  } ).done( function( data ) {
    riot.mount( 'issues', {
      title: location.hash.slice( 1 ),
      issues: data
    } )
  } );
} );

if ( location.hash.slice( 1 ) ) {
  $( window ).trigger( 'hashchange' )
}
