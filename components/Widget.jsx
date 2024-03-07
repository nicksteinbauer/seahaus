
import Script from 'next/script'

export default function Widget() {
  return (
    <>
      <div
        id="lodgify-search-bar"
        data-website-id="467772"
        data-language-code="en"
        data-checkout-page-url="https://checkout.lodgify.com/justpeachy/en/#/514532"
        
        data-dates-check-in-label="Arrival"
        data-dates-check-out-label="Departure"
        data-guests-counter-label="Guests"
        data-guests-input-singular-label="{{NumberOfGuests}} guest"
        data-guests-input-plural-label="{{NumberOfGuests}} guests"
        data-location-input-label="Location"
        data-search-button-label="Search"
        
        data-new-tab="true"
        data-version="stable"
      ></div>
      <Script src="https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js" />
    </>
  )
}