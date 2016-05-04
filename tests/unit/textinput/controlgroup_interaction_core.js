QUnit.test( "Controlgroup interaction", function( assert ) {
	var group = $( "#group" );
	var textinput1 = $( "#textinput1" );
	var textinputButton1 = textinput1.parent();
	var textinputButton2 = $( "#textinput2" ).parent();

	assert.expect( 7 );

	assert.lacksClasses( textinputButton1, "ui-shadow",
		"In the horizontal orientation the textinput menu has no shadow" );
	assert.hasClasses( textinputButton1, "ui-corner-left",
		"in the horizontal orientation the first textinput menu has left corners" );
	assert.hasClasses( textinputButton2, "ui-corner-right",
		"in the horizontal orientation the last textinput menu has right corners" );

	group.controlgroup( "option", "direction", "vertical" );

	assert.lacksClasses( textinputButton1, "ui-shadow",
		"In the vertical orientation the textinput menu has no shadow" );
	assert.hasClasses( textinputButton1, "ui-corner-top",
		"in the vertical orientation the first textinput menu has top corners" );
	assert.hasClasses( textinputButton2, "ui-corner-bottom",
		"in the vertical orientation the last textinput menu has bottom corners" );

	textinput1.textinput( "destroy" ).remove();
	group.controlgroup( "refresh" );

	assert.hasClasses( textinputButton2, "ui-corner-all",
		"When there's only one textinput, it has classes ui-corner-all" );
} );

QUnit.test( "Disabled textinputs", function( assert ) {
	var group = $( "#disabled-group" );
	var button1 = $( "#disabled-textinput1" ).parent();
	var button2 = $( "#disabled-textinput2" ).parent();
	var button3 = $( "#disabled-textinput3" ).parent();

	assert.hasClasses( button1, "ui-corner-left", "First textinput has class ui-corner-left" );
	assert.lacksClasses( button1, "ui-corner-right ui-corner-all",
		"First textinput lacks both ui-corner-right and ui-corner-all" );
	assert.lacksClassStart( button2,
		"ui-corner-", "Middle textinput has no classes that start with 'ui-corner-'" );
	assert.hasClasses( button3, "ui-corner-right", "Last textinput has class ui-corner-right" );
	assert.lacksClasses( button3, "ui-corner-left ui-corner-all",
		"Last textinput lacks both ui-corner-left and ui-corner-all" );

	group.controlgroup( "option", "direction", "vertical" );

	assert.hasClasses( button1, "ui-corner-top", "First textinput has class ui-corner-top" );
	assert.lacksClasses( button1, "ui-corner-bottom ui-corner-all",
		"First textinput lacks both ui-corner-bottom and ui-corner-all" );
	assert.lacksClassStart( button2,
		"ui-corner-", "Middle textinput has no classes that start with 'ui-corner-'" );
	assert.hasClasses( button3, "ui-corner-bottom", "Last textinput has class ui-corner-bottom" );
	assert.lacksClasses( button3, "ui-corner-top ui-corner-all",
		"Last textinput lacks both ui-corner-top and ui-corner-all" );
} );
