<repos>

  <ul class="repos">
    <li each={ repos } class="repo"><a href="#{ this.name }">{ this.name } <span class="count">({ this.open_issues_count })</span</a></li>
  </ul>

  <script>
    this.repos = opts.repos
    this.repos.sort( function( a, b ) {
        if ( a.open_issues_count > b.open_issues_count ) return -1;
        if ( a.open_issues_count < b.open_issues_count ) return 1;
        return 0;
    } );
  </script>

  <style>
  :scope { display: block }

  .repos
  {
    list-style-type: none;
  }

  .count
  {
    float: right;
  }
  </style>
</repos>
