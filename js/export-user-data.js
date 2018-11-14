// lazy load in some jQuery validation ##
jQuery(document).ready(function($) {

    // build super multiselect ##
    jQuery('#usermeta, #bp_fields, #bp_fields_update_time').multiSelect();

    //Select any fields from saved settings ##
    jQuery('#usermeta').multiSelect('select',([q_eud.usermeta_saved_fields]));
    jQuery('#bp_fields').multiSelect('select',([q_eud.bp_fields_saved_fields]));
    jQuery('#bp_fields_update_time').multiSelect('select',([q_eud.bp_fields_update_time_saved_fields]));

    // show only common ##
    jQuery('.usermeta-common').click(function(e){
        e.preventDefault();
        jQuery('#ms-usermeta .ms-selectable li.system').hide();
    });

    // show all ##
    jQuery('.usermeta-all').click(function(e){
        e.preventDefault();
        jQuery('#ms-usermeta .ms-selectable li').show();
    });

    // select all ##
    jQuery('.select-all').click(function(e){
        e.preventDefault();
        jQuery( jQuery(this).parent().parent().parent().find( 'select' ) ).multiSelect( 'select_all' );
    });

    // select none ##
    jQuery('.select-none').click(function(e){
        e.preventDefault();
        jQuery( jQuery(this).parent().parent().parent().find( 'select' ) ).multiSelect( 'deselect_all' );
    });


    // validate number inputs ##
    $("input.numeric").blur(function() {
      
        if ( $(this).val() && ! $.isNumeric( $(this).val() ) ) {

            $(this).css({ 'background': 'red', 'color': 'white' }); // highlight error ##
            $("p.submit .button-primary").attr('disabled','disabled'); // disable submit ##

        } else {

            $(this).css({ 'background': 'white', 'color': '#333' }); // remove error highlighting ##
            $("p.submit .button-primary").removeAttr('disabled'); // enable submit ##

        }

    });

    // toggle advanced options ##
    jQuery(".toggle a").click( function(e) {
        e.preventDefault();
        $toggleable = jQuery("tr.toggleable");
        $toggleable.toggle();
        if ( $toggleable.is(":visible") ) {
            jQuery(this).text(q_eud.txt_hide);
        } else {
            jQuery(this).text(q_eud.txt_show);
        }
    });

    // validate save button ##
    jQuery("#save_export").click( function(e) {

        // grab the value of the input ##
        var q_eud_save_options_new_export = jQuery('#q_eud_save_options_new_export').val();

        if ( ! q_eud_save_options_new_export || q_eud_save_options_new_export == '' ) {

            e.preventDefault(); // stop things here ##
            jQuery('#q_eud_save_options_new_export').addClass("error");

        }

    });

    // remove validation on focus ##
    jQuery("body").on( 'focus', '#q_eud_save_options_new_export', function(e) {

        jQuery(this).removeClass("error");

    });

    // start date picker ##
    jQuery('.start-datepicker').datepicker( {
        dateFormat  : 'yy-mm-dd',
        minDate     : q_eud.datepicker_min,
        maxDate     : q_eud.datepicker_max,
        firstDay    : q_eud.start_of_week
    } );

    // end date picker ##
    jQuery('.end-datepicker').datepicker( {
        dateFormat  : 'yy-mm-dd',
        minDate     : q_eud.datepicker_min,
        maxDate     : q_eud.datepicker_max,
        firstDay    : q_eud.start_of_week
    } );

    // end date picker ##
    // might want to set minDate to something else, but not sure
    // what would be best for everyone
    jQuery('.updated-datepicker').datepicker( {
        dateFormat  : 'yy-mm-dd',
        minDate     : q_eud.datepicker_min,
        maxDate     : q_eud.datepicker_max,
        firstDay    : q_eud.start_of_week
    } );

});
