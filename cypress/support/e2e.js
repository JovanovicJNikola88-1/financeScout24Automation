import './commands'

// This could be a solution for the bypassing cookies popup modal
beforeEach(() => {
    const currentDate = new Date(Date.now());
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
    const day = currentDate.toLocaleString('en-us', { weekday: 'short'});
    const date = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    // setting cookie to avoid terms and conditions modal to appear
    cy.setCookie('OptanonAlertBoxClosed', `${currentDate}`)
    cy.setCookie('OptanonConsent'
        , `consentId=66c63478-a879-4c27-94bb-bb9fbcbc6892&datestamp=${day}+${month}+${date}+${year}`
        + '+14%3A34%3A12+GMT%2B0100+(Central+European+Standard+Time)&version=202312.1.0'
        + '&interactionCount=1&isGpcEnabled=0&browserGpcFlag=0&isIABGlobal=false&hosts='
        + '&landingPath=NotLandingPage&groups=C0001%3A1%2CC0004%3A1%2CC0002%3A1%2CV2STACK42%3A1')
  });
