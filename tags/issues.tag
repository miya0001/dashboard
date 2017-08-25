<issues>
  <h1 class="repo-title">{ opts.title }</h1>

  <div class="container-fluid issues">
    <div each={ issues } class="col-lg-4">
      <div class="issue">
        <h2><a href="{ this.html_url }">{ this.title }</a></h2>
      </div>
    </div>
  </div>

  <script>
    this.issues = opts.issues
    console.log( this.issues )
  </script>
</issues>
