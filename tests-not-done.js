
/*

  equal(jQuery("element[attribute='<div></div>']").length, 0, "When html is within brackets, do not recognize as html.");

  equal( jQuery( "element[attribute=<div></div>]" ).length, 0,

  // "When html is within brackets, do not recognize as html." ); 
  equal(jQuery("element:not(<div></div>)").length,0, "When html is within parens, do not recognize as html.");

  equal(jQuery("\\<div\\>").length, 0, "Ignore escaped html characters");
});*/


// Create & append html with escaped characters.
/*describe("Create & _append() html with escaped characters", function() {
  
  it("Create and append html with escaped characters", function() {
    var str = '\\<div\\>';
    mps._append(mps._select('#append-html-escaped'),str);
    var check = document.getElementById('append-html-escaped');
    // Check that escaped tag is not added as DOM element.
    for(var i=0; i<check.childNodes.length; i++) {
      expect(check.childNodes[i].nodeType).not.toBe(1);
    }
  });

  // Insert Ad click
document.getElementById('btn-insert-ad').addEventListener("click", function() {
  mps._append(mps._select('#banner-ad'), mps.getAd('skyscraperad'));
});

describe("Insert ad click event", function() {
      
  it ("Invoke click to insert ad", function() {
    var spyEvent = spyOn(document.getElementById('btn-insert-ad'), 'click');
    document.getElementById('btn-insert-ad').click();
       
    expect(spyEvent).toHaveBeenCalled();
  });
 
});

});*/