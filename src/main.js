'use strict'

require( 'babel-polyfill' )

global.$ = global.jQuery = require( 'jquery' )
global.bootstrap = require( 'bootstrap' )
global.riot = require( 'riot' )
global.moment = require( 'moment' )
global.octicons = require("octicons")

const api = 'https://api.github.com'
const org = 'wp-cli'

const repos_tag = require( '../tags/repos.tag' )
const issues_tag = require( '../tags/issues.tag' )

$.ajax( {
  url: api + '/orgs/' + org + '/repos',
  data: { per_page: 100 },
  dataType: 'json'
} ).done( ( data ) => {
  riot.mount( repos_tag, { repos: data } )
} );

$( window ).on( 'hashchange', () => {
  const repo = location.hash.slice( 1 );
  $.ajax( {
    url: api + '/repos/' + org + '/' + repo + '/issues',
    data: { per_page: 100 },
    dataType: 'json'
  } ).done( function( data ) {
    riot.mount( issues_tag, {
      title: location.hash.slice( 1 ),
      issues: data
    } )
  } );
} );

if ( location.hash.slice( 1 ) ) {
  $( window ).trigger( 'hashchange' )
}
