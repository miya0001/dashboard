<issues>
  <h1 class="repo-title"><a href="https://github.com/wp-cli/{ opts.title }">{ opts.title }</a></h1>

  <div class="container-fluid issues">
    <div each={ issues } class="col-lg-4">
      <div class="issue">
        <h2><span if={ this.pull_request } class="octicon octicon-git-pull-request"></span><span if={ ! this.pull_request } class="octicon octicon-issue-opened"></span>
          <a href="{ this.html_url }">{ this.title }</a></h2>
        <div class="created-at">{ moment( this.created_at ).fromNow() }</div>
        <ul class="labels">
          <li each={ this.labels } class="label"><a href="https://github.com/wp-cli/wp-cli/labels/{ encodeURI( this.name)  }" style="background-color: #{ this.color };">{ this.name }</a></li>
        </ul>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>

  <script>
    this.issues = opts.issues
    console.log( this.issues )
  </script>

  <style>
    :scope { display: block }

    .labels {
      list-style-type: none;
      margin: 1em 0;
      padding: 0;
    }

    .label {
      float: left;
      margin: 0;
      margin-right: 5px;
      margin-bottom: 5px;
      padding: 0;
    }

    .label a {
      color: #ffffff;
      padding: 5px;
      display: block;
      font-size: 14px;
      font-weight: normal;
    }
  </style>
</issues>
