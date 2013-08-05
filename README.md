Sync Scroll
===========

Syncronise scrolls for multiple DIVs vertically and horizontally

## Usage
    
        <div class='column'>
			Some long content in column 1...
		</div>
		<div class='column'>
			Some long content in column 2...
		</div>

		$(document).ready(function() {
			$('.column').wd_syncscroll();
		});

The following options are available (default shown below) :

		overflow: 'auto', 
		height: false,
		width: false,
		group: 'wd'

		
		$(document).ready(function() {
			$('.column').wd_syncscroll({
				height: '400px'
			});
		});

If you do not define height or width option, make sure your style has the definition of height and width

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
