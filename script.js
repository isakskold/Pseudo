// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*



// Definerar funktionen som räknar ut pris. Den funktion kallas på då användaren klickar på bekräfta knappen

start function calculatePrice(totalPrice, numberOfPeople, tipPercentage)

    let totalAmountWithTip = totalPrice + (totalPrice * tipPercentage)
    let amountPerPerson = totalAmountWithTip / numberOfPeople
    return amountPerPerson

end function 



//Denna funktion representerar vad som händer när användaren klickar på bekräfta knappen. Den innehåller även felhantering om användaren ger ogiltiga inputs. Det är i denna funktion som prisuträknings funktionen kallas på. Slutligen får användaren resultatet genom en "alert".

start function onConfirmationButtonClick()

    let buttonClicked = false   //Bekräfta-knappens standardläge är false. Då knappen trycks på blir den true.

    if (buttonClicked)  //Checkar om bekräfta knappen är true, dvs om knappen blivit klickad på.

        let totalPrice = parseFloat(prompt("Enter the total price"))
        let numberOfPeople = parseInt(prompt("Enter number of people who will split the nota"))
        let tipPercentage = parseFloat(prompt("Enter tip percentage in decimal format"))

        if (isNaN(totalPrice) || isNaN(numberOfPeople) || isNaN(tipPercentage))
            alert("Invalid input. Please provide valid numbers")
            return 
        end if

        let amountPerPerson = calculatePrice(totalPrice, numberOfPeople, tipPercentage)

        alert("The price for each person is $" + amountPerPerson.toFixed(2))

    end if

end function


//Det är värt att nämna att dessa två block endast är definitioner. Jag tolkar uppgiften som att användaren presenteras med en vy och utifrån vyn kan trigga dessa funktioner genom inputs. Med hjälp av html och css får användaren ett GUI där hen kan skriva in relevant info som programmet behöver för att räkna ut priset per person. Ingen javascript körs förens bekräfta-knappen är klickad. Som jag även förstår det så är rätt sätt att göra detta med hjälp av "event handling" och ID's från html dokumentet, då en knapp trycks på. Men jag tycker min pseudokod förklarar funkionaliteten och kan sedans skrivas om på "rätt sätt" då man har html strukturen färdig.
*/