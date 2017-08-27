const api = 'https://api.github.com'
const org = 'wp-cli'

describe('repos specs', function() {

  before(function() {
    var body = document.body;

    while ( body.firstChild ) {
      body.removeChild( body.firstChild );
    }

    var html = document.createElement( 'repos' );
    body.appendChild( html );
  })

  it('Tests for the `<repos />` with args', function() {
    $.ajax( {
      async: false,
      url: api + '/orgs/' + org + '/repos',
      data: { per_page: 100 },
      dataType: 'json'
    } ).done( function( data ) {
      riot.mount( 'repos', { repos: data } )
      expect( $( '.repo' ).length > 0 ).to.be( true );
    } );
  })
})
