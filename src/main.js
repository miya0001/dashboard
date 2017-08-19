const repos = 'https://api.github.com/orgs/wp-cli/repos';

$.ajax( {
  url: repos,
  data: { per_page: 100 },
  dataType: 'json'
} ).done( function( data ) {
  riot.mount( 'repos', { repos: data } )
} );

$( window ).on( 'hashchange',function() {
  riot.mount( 'issues', { title: location.hash.slice( 1 ) } )
} );

if ( location.hash.slice( 1 ) ) {
  $( window ).trigger( 'hashchange' )
}
