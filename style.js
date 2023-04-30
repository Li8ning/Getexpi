$(document).ready(function(){
    $(".selectionPM .payMethod button.total-amt,.selectionPM .payMethod .PMImage").click(function(){
        $(".payMethod").removeClass("selected");
        $(this).parent().addClass("selected");
    });
    $("input[name='payMethod']").change(function(){
        const selected_PM = $(this).attr("id");
        if(selected_PM == "wise-pay"){
            $("#makePMBtn .selectedPM img").attr("src","assets/images/Wise.svg");
        }
        else if(selected_PM == "paypal-pay"){
            $("#makePMBtn .selectedPM img").attr("src","assets/images/Paypal.svg");
        }
    });
    $(".steps .step-sub-btn").click(function(){
        const currentStep = $(this).data("step");
        const steps = $(".steps").find(".accordion");
        const stepsCount = $(".steps").find(".accordion").length;
        if(currentStep<=stepsCount){
            const nextStep = currentStep+1;
            $(steps[nextStep]).find("button.accordion-button").prop("disabled",false);
            $(steps[nextStep]).find("div.accordion-collapse").addClass("show");
            $('html, body').animate({
                scrollTop: $(steps[nextStep]).offset().top
            }, 500);
            console.log($(".steps-counter div[data-step='"+currentStep+"'"));
            $(".steps-counter").each(function(i,obj){
                $(obj).find("div[data-step='"+currentStep+"']").removeClass("current").addClass("finished");
                $(obj).find("div[data-step='"+nextStep+"']").addClass("current");
            });
        }
    });

    // hide show filter controls
    $(".filter-tabs button").click(function(){
        const controlId = $(this).data("control");
        $(".filter-tabs button").removeClass("active");
        $(this).addClass("active");
        $(".filter-controls .filterControl").css("display","none");
        $("#"+controlId).css("display","flex");
    });

    // Setting default values
    $( ".rangeSlider" ).each(function(i,val){
        const defMin = $(this).data("defmin");
        const defMax = $(this).data("defmax");
        const minVal = $(this).data("minval");
        const maxVal = $(this).data("maxval");
        $(this).slider({
            range: true,
            min: minVal,
            max: maxVal,
            values: [defMin,defMax]
        });
        $(this).parent().find(".minMaxVal .minVal").html($(this).slider("values", 0));
        $(this).parent().find(".minMaxVal .maxVal").html($(this).slider("values", 1));
    });
    // Updating the min max values in textbox when slider changes
    $(".rangeSlider").on("slide",function(event,ui){
        $(this).parent().find(".minMaxVal .minVal").html(ui.values[0]);
        $(this).parent().find(".minMaxVal .maxVal").html(ui.values[1]);
    });

    // Show Hide domain names under domain name selection section in my domain page
    $(".showMoreDomain").click(function(){
        $(".domainNames div:nth-child(n+16)").css("display","inline-block");
    });
    $(".hideDomain").click(function(){
        $(".domainNames div:nth-child(n+16)").css("display","none");
    });

    // Open file upload on button click
    $("#openChangeAvatar").click(function(){
        $('#changeAvatar').trigger('click');
    });

    // hide show user details form
    $(".profileCard .formStepsControls button").click(function(){
        const controlId = $(this).data("control");
        $(".profileCard .formStepsControls button").removeClass("active");
        $(this).addClass("active");
        $(".profile-inner-container .editUserDetailsForm form").css("display","none");
        $("#"+controlId).css("display","block");
    });
});