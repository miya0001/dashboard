const api = 'https://api.github.com'
const org = 'wp-cli'

describe('issues specs', function() {

  before(function() {
    var body = document.body;

    while ( body.firstChild ) {
      body.removeChild( body.firstChild );
    }

    var html = document.createElement( 'issues' );
    body.appendChild( html );
  })

  it('Tests for the `<issues />` with args', function() {
    const repo = 'wp-cli'
    $.ajax( {
      async: false,
      url: api + '/repos/' + org + '/' + repo + '/issues',
      data: { per_page: 100 },
      dataType: 'json'
    } ).done( function( data ) {
      riot.mount( 'issues', {
        title: location.hash.slice( 1 ),
        issues: data
      } )
      expect( $( '.issue' ).length > 0 ).to.be( true );
    } );
  })
})
