
function GalleryController($scope){
  	$scope.gallery=[
  			{
  				tittle: "Dark Doodad LRGB",
  				urls: "images/galerifolder/Dark_Doodad_LRGB_lorenzi1024.jpg"},
  			{
  				tittle: "Eta Aquarid MW Taylor",
  				urls: "images/galerifolder/EtaAquaridMW_taylor.jpg"},
  			{	
  				tittle: "Love Joy astrolo 60c1024",
  				urls: "images/galerifolder/Feb20Lovejoy_astroligu60c1024.jpg"},
  			{
  				tittle: "Helix BiCOlour Final pugh",
  			 	urls: "images/galerifolder/Helix_BiColour_Finalpugh1022c.jpg"},
  			{	
  				tittle: "Uknow",
  			 	urls: "images/galerifolder/dfg.jpg"},
  			{	
  				tittle: "Doodad Eder",
  			 	urls: "images/galerifolder/doodad_eder900x.jpg"},
  			{	
  				tittle: "Dreamland",
  			 	urls: "images/galerifolder/dreamland-580x326.jpg"},
  			{
  				tittle: "Dustyorion",
  			 	urls: "images/galerifolder/dustyorion_fields_960.jpg"},
  			{
  				tittle: "Eagle KP960",
  			 	urls: "images/galerifolder/eagle_kp09_960.jpg"},
  			{
  				tittle: "Eagle Nebula Pillars",
  				urls: "images/galerifolder/eagle_nebula_pillars_complete.jpg"},
  			{
  				tittle: "Green Company rive",
  			 	urls: "images/galerifolder/greencompany_rive_960.jpg"},
  			 {
  				tittle: "desconocido",
  				urls: "images/galerifolder/h.jpg"}];//<div ng-controller="GalleryController as gallery">{{textos[0].texto}}</div>
};

$(document).ready(function(){
	
	 loadGallery(true, 'a.asad');
	 
	 function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
     }
     
      /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */
    
    function loadGallery(setIDs, setClickAttr){
    	var current_image,selector,counter=0;
    	
    	$('#show-next-image, #show-previous-image').click(function(){
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });
        
        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }
        
        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        
         $(setClickAttr).on('click',function(){
            updateGallery($(this));
         });
    }
     
});

