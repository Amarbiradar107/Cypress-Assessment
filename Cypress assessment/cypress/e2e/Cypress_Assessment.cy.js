describe('Cypress Assessment',()=>{

    it('Cypress Assessment ', () => {

        cy.viewport(1000,660);

        //navigate to website
        // Navigate to the FitPeo Homepage:
        cy.visit('https://www.fitpeo.com/'); 

        //click on the side menu button 
        cy.get('.MuiToolbar-root > :nth-child(2) > .MuiButtonBase-root').click();

        //click on the Revenue Calculator Page
        // Navigate to the Revenue Calculator Page 
        cy.get('[href="/revenue-calculator"] > .MuiListItemText-root > .MuiTypography-root').click();

        // Scroll to the slider elemnet 
        // Scroll down the page until the revenue calculator slider is visible.
        cy.get('.MuiBox-root.css-j7qwjs').scrollIntoView();
        
        // update the value from slider 
        // Adjust the Slider: Adjust the slider to set its value to 820. we’ve highlighted the slider in red color, Once the slider is moved the bottom text field value should be updated to 820
        cy.get('.MuiSlider-root.MuiSlider-colorPrimary.MuiSlider-sizeMedium.css-duk49p')
            .invoke('attr',"style","left: 41%;");

        cy.get('.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.css-sy3s50')    
            .invoke('attr',"style","left: 41%;")

        cy.get('.MuiSlider-track.css-10opxo5')
            .invoke('attr',"style","left: 0%; width: 41%;")

        cy.get('input[type="range"]')
            .invoke("attr", "aria-valuenow","820")
            .invoke("attr",'value',"820")
            .trigger("change", { force: true })
        

        //Update the value from the input box
        // Validate Slider Value: Ensure that when the value 560 is entered in the text field, the slider's position is updated to reflect the value 560.
        // Update the Text Field: Click on the text field associated with the slider.Enter the value 560 in the text field. Now the slider also should change accordingly
        cy.get('input[type="range"]')
            .invoke("attr", "aria-valuenow","560")
            .invoke("attr",'value',"560")
            .trigger("change", { force: true })

        cy.get('.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.css-sy3s50')    
        .invoke('attr',"style","left: 28%;")
            
        cy.get('.MuiSlider-track.css-10opxo5')
            .invoke('attr',"style","left: 0%; width: 28%;")

        
        // Select CPT Codes:

        // scroll to the CPT-99091 box
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').scrollIntoView();
        // select the check box
        cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check();

        // scroll to the CPT-99453 box
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').scrollIntoView();
        // select the check box
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check();

        // scroll to the CPT-99454 box
        cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').scrollIntoView();
        // select the check box
        cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check();

        // scroll to the CPT-99474 box
        cy.get(':nth-child(8) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').scrollIntoView();
        // select the check box
        cy.get(':nth-child(8) > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check();


        
        
        // update the value from slider to 820
        cy.get('.MuiBox-root.css-j7qwjs').scrollIntoView();

        cy.get('.MuiSlider-root.MuiSlider-colorPrimary.MuiSlider-sizeMedium.css-duk49p')
            .invoke('attr',"style","left: 41%;");

        cy.get('.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.css-sy3s50')    
            .invoke('attr',"style","left: 41%;")

        cy.get('.MuiSlider-track.css-10opxo5')
            .invoke('attr',"style","left: 0%; width: 41%;")

        cy.get('input[type="range"]')
            .invoke("attr", "aria-valuenow","820")
            .invoke("attr",'value',"820")
            .trigger("change", { force: true })


        
        // Verify that the header displaying Total Recurring Reimbursement for all Patients Per Month: shows the value $110700.	
        cy.get('.css-1pr1g5o').scrollIntoView();
        cy.get('div.MuiBox-root.css-m1khva') 
        .find('p.MuiTypography-root.MuiTypography-body1.inter.css-12bch19')
        .should('have.text', '$110700'); // assertion for the value


    });

})
