import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function Faqs() {
  const [showMore, setShowMore] = useState(false);
  const showMoreHandle = () => {
    setShowMore(!showMore);
  };
  const closeHandle = () => {
    setShowMore(false);
  };
  return (
    <div className="faq_wrapper pt-120 pb-80">
      <div className="container">
        <div className="text-center">
          <h2>FAQS</h2>
          <p>Some of the most frequently asked questions we receive</p>
        </div>
        <div className="faq_inner_wrap">
          <div className="more_content">
            <div className="text-center">
              <div onClick={() => showMoreHandle()} className="show_more_btn">
                <i className="pi pi-angle-down me-2"></i> <span>Show All</span>
              </div>
            </div>
            {showMore === true && (
              <div className="more_content_innner mt-4">
                <div className="close_btn" onClick={() => closeHandle()}>
                  <i className="pi pi-times"></i>
                </div>
                <div className="accordian_wrapper">
                  <h4>Venue</h4>
                  <Accordion multiple>
                    <AccordionTab header="Where is the party held within Tobacco Dock ?">
                      <p>
                        Roaring Twenties Christmas Parties are situatued in The
                        Gallery or North Dock spaces at Tobacco Dock Skylight is
                        a separate offerings to the Roaring Twenties parties.
                      </p>
                      <p>
                        Guests will not have access to other party spaces or the
                        facilities within them.{' '}
                      </p>
                    </AccordionTab>
                    <AccordionTab header="Does the venue have disabled access?">
                      <p>
                        All of our venues are accessible to wheelchair users and
                        those with limited mobility. However, please note that
                        some of our venues have a raised dance floor, which are
                        only accessible by steps. Should any of your guests have
                        such, please do call us on 01932 359900 or email
                        bookings@bestpartiesever.com so we can do our best to
                        ensure their requirements are looked after during the
                        event.
                      </p>
                    </AccordionTab>
                  </Accordion>
                  <h4>Booking Admin</h4>
                  <Accordion multiple>
                    <AccordionTab header="How much is the deposit per person and when is it due?">
                      <p>
                        The deposit per person is £25.00 and this amount is
                        non-refundable and non-transferable.
                      </p>
                      <p>
                        Your deposit must be paid for all guests to confirm your
                        party with us.
                      </p>
                      <p>
                        Depending on the popularity of the night, our email to
                        you will let you know how long you can hold for under no
                        obligation, before the deposit will be due. This will
                        vary and is subject to change.
                      </p>
                      <p>
                        If it is less than 6 weeks away till your chosen party
                        date, full payment will be due to confirm your booking.
                        This is because the final balance of any party will be
                        due at this time.{' '}
                      </p>
                    </AccordionTab>
                    <AccordionTab header="Can I add to my booking later?">
                      <p>
                        We are as flexible as possible up until 2 days before
                        your party, and we will always try our best to
                        accommodate any last minute changes, however, we cannot
                        guarantee this. Provided that we have availability you
                        can add to your booking.
                      </p>
                      <p>
                        Please note, availability is subject to change and
                        tickets are on a first come, first served basis. You can
                        add or decrease the number of guests in your booking
                        through your online account, or by sending written
                        confirmation via email to bookings@bestpartiesever.com
                        to confirm how you would like to proceed in regards to
                        your booking number. Full payment is required in order
                        to secure additional tickets.
                      </p>
                      <p>
                        Please be aware that if guest numbers increase via
                        online booking or via email confirmation, you will
                        automatically be liable for those additional costs, as
                        per the terms and conditions.
                      </p>
                      <p>
                        You can amend your booking 24 hours a day, 7 days a week
                        using the ‘My Account’ section of our website. If you
                        have trouble accessing, please contact a member of our
                        team.
                      </p>
                      <p>
                        If you wish to reduce the number of people in your
                        party, any monies already paid are non-refundable and
                        non-transferable meaning these payments cannot be used
                        towards any additional orders or balance payments. For
                        example, you cannot use this money for drinks packages,
                        or any add ons etc.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="What is the minimum number of guests that I can book for?">
                      <p>
                        The minimum booking is for 8 guests. We seat each
                        booking at their own private tables, and do not mix
                        booking across shared tables.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="Is there an age limit?">
                      <p>
                        We only stipulate a minimum age limit for our guests,
                        however in line with our licence, we are afraid our
                        parties can only be attended by guests who are{' '}
                        <b>over 18 years old.</b>
                      </p>
                    </AccordionTab>
                    <AccordionTab header="Business / Consumer Price - claiming back VAT">
                      <p>
                        All customers pay the Consumer Price to book their
                        party.
                      </p>
                      <p>
                        If you are a VAT registered business you can then claim
                        back the VAT – through your business as like any other
                        business expense, and so you end up paying the
                        advertised business price.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="How and when do I pay for my party?">
                      <p>
                        The initial deposit of £25.00 per person is due to
                        confirm your booking, the booking confirmation email
                        sent to you will detail the deadline to complete this
                        by. The deposit per person is non-refundable and
                        non-transferable.
                      </p>
                      <p>
                        Your final balance for your booking is due no later than
                        6 weeks before the date of the party.
                      </p>
                      <p>
                        Any additional items such as drinks packages must be
                        paid for when the order is placed.
                      </p>
                      <p>
                        The balance of your booking can be paid on our website
                        via your online account, by bank transfer (BACS), or
                        over the phone with us. All details can be found on your
                        booking confirmation email.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="Can I change my booking?">
                      <p>
                        We are as flexible as possible up until 2 days before
                        your party. Provided that we have availability you can
                        add to your booking.
                      </p>
                      <p>
                        Please note, availability changes constantly and tickets
                        are on a first come, first served basis. You can add
                        additional guests through your online account or by
                        sending written confirmation via email to
                        bookings@bestpartiesever.com to confirm how you would
                        like to proceed in regards to your booking number with
                        full payment in order to secure additional tickets.{' '}
                      </p>
                      <p>
                        Please be aware that if guest numbers increase via
                        online bookings or via email confirmation, you will be
                        automatically liable for those additional costs.
                      </p>
                      <p>
                        You can amend your booking 24 hours a day, 7 days a week
                        using the ‘My Account’ section of our website (up to 48
                        hours before your party). If you wish to reduce the
                        number of people in your party, we are afraid that any
                        monies already paid are non-refundable and
                        non-transferable meaning these payments cannot be used
                        towards any additional orders or balance payments.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="How do I book my party?">
                      <p>
                        You can reserve your party online 24 hours a day, 7 days
                        a week! Simply to go www.bestpartiesever.com and select
                        your venue – then choose the best date for your group
                        and snap up those places before someone else does!
                      </p>
                      <p>
                        Our ‘My Account’ section of our website will then allow
                        you to pay deposits, add drinks packages, send
                        invitations to your guests, update their dietary
                        requirements and see all the information about your
                        party.
                      </p>
                      <p>
                        Alternatively, you can call us on 01932 359900 and we
                        can talk through any questions you have and book your
                        party for you.
                      </p>
                      <p>
                        Whichever way you choose to book your party; you will
                        receive an email which states if you wish to confirm
                        your places you have a set holding period before paying
                        a £25.00 deposit per person.
                      </p>
                      <p>
                        Please note that this deposit is non-refundable and
                        non-transferrable.
                      </p>
                      <p>
                        The deposits, as well as the balance of your booking can
                        be paid on our website via your online account, by bank
                        transfer (BACS), or over the phone with us. All details
                        can be found on your booking confirmation email.
                      </p>
                    </AccordionTab>
                  </Accordion>
                  <h4>Menu</h4>
                  <Accordion multiple>
                    <AccordionTab header="Dietary requirements">
                      <p>
                        We have designed delicious set menus alongside our main
                        set menu for those guests who are vegetarian, vegan or
                        have an allergy to dairy, gluten or nuts.
                      </p>
                      <p>
                        We can also cater for Halal meals - if they are
                        pre-ordered.
                      </p>
                      <p>
                        Please note that these alternative menus are set and
                        must be ordered in advance of the party, you will then
                        receive the full chosen menu. Unfortunately, you cannot
                        mix and match courses from each set menu.
                      </p>
                      <p>
                        A sample set menu is listed on our website. For example,
                        if you are Vegetarian you will follow the Vegetarian set
                        menu for all 3 courses.
                      </p>
                      <p>
                        Please note that we are able to provide Kosher meals at
                        a cost. However, you are more than welcome to arrange
                        for us to receive a Kosher Meal on the day of your party
                        and we will cook this in our ovens and serve (still in
                        the tray) to your guests at their tables. There is no
                        additional charge; however neither does the guest
                        receive any discount for not having one of our own
                        meals.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="What's on the menu?">
                      <p>
                        There is a sample set menu which can be viewed online -
                        simply to go www.bestpartiesever.com and select your
                        venue.
                      </p>
                      <p>
                        The starter, main course and dessert platters are served
                        to your table with tea and coffee being served from an
                        ongoing station after the meal has finished. Please
                        note, desserts are served on a selection plate to share
                        with your table of guests.
                      </p>
                      <p>
                        Our additional interactive dessert stations will be
                        available in the bar area after the meal.
                      </p>
                      <p>
                        This allows everyone to get on with enjoying the party,
                        and those who wish to have tea & coffee to do so from
                        the end of dinner service until 11pm. The DJ will
                        announce where and when these stations are available, so
                        make sure you listen out!
                      </p>
                    </AccordionTab>
                  </Accordion>
                  <h4>Drinks</h4>
                  <Accordion multiple>
                    <AccordionTab header="How much does it cost for delivery of my wristbands/tokens in advance ?">
                      <p>
                        All drinks orders that include wristbands, drink tokens,
                        or dodgem tokens, if placed and paid for well in advance
                        of the party, will be dispatched out to you by tracked
                        delivery or courier 10 days before your party.
                      </p>
                      <p>
                        A fee of £3.95 including VAT is charged as a
                        contribution towards this service, to ensure your
                        package is tracked along the way and to know when it
                        will arrive with you.
                      </p>
                      <p>
                        You can also track the parcel, the links will appear in
                        your online booking account at
                        www.bestpartiesever.com/account.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="How do I pre-order drinks?">
                      <p>
                        We have several drinks packages available, simply go to
                        the online account to see the options available to you
                        www.bestpartiesever.com/account, or go to our website
                        www.bestpartiesever.com and select your chosen venue.{' '}
                      </p>
                      <p>
                        In addition to drinks packages, you can also pre-order
                        wine and water by the bottle.
                      </p>
                      <p>
                        Please note, we do accept American Express as a form of
                        payment, but there will be an additional charge of 3%.
                      </p>
                      <p>
                        Please note, there is an additional charge of 1.8% if a
                        payment is made with a corporate card.{' '}
                      </p>
                      <p>
                        A delivery charge of £3.95 will be charged if tokens or
                        wristbands are ordered, as a contribution towards us
                        dispatching these out to you in advance of your party.
                      </p>
                      <p>
                        No alcohol is to be brought onto the premises. In
                        addition, no alcohol can be taken outside of the
                        premises. If alcohol is brought into the venue you will
                        be asked to vacate the premises.
                      </p>
                    </AccordionTab>
                  </Accordion>
                  <h4>Location and Parking</h4>
                  <Accordion multiple>
                    <AccordionTab header="Is there parking at the venue?">
                      <p>
                        As every venue is different please go to your chosen
                        venue's page and refer to the 'Location' section for
                        further detail on parking information and arrangements.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="How do I get there?">
                      <p>
                        Each of the guests in your party will receive an
                        E-ticket, which they can view on any mobile device or
                        print, and this will detail the venue’s locations as
                        well as directions to the venue.
                      </p>
                      <p>
                        Directions and an interactive map is also available at
                        www.bestpartiesever.com on the Location section of your
                        chosen venue page.
                      </p>
                    </AccordionTab>
                  </Accordion>
                  <h4>On the night</h4>
                  <Accordion multiple>
                    <AccordionTab header="Do the bars accept cards ?">
                      <p>
                        Our bars accept card payments (contactless and chip and
                        pin payments), prepaid tokens and prepaid wristbands as
                        forms of payments.{' '}
                      </p>
                      <p>
                        Please be aware that we do not accept cash payments on
                        the night.{' '}
                      </p>
                      <p>
                        Should you have a wristband or tokens there is a bar for
                        your use and the time spent at the bar is greatly
                        reduced due to these pre-paid payment methods.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="Are strobe lights used?">
                      <p>
                        We don't install strobes at our venues but we do use
                        strobe effects. Although this effect is much more
                        subtle, we would advise strobe sensitive guests to be
                        aware of this.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="Is there a table plan?">
                      <p>
                        When you enter the venue you will see table plans
                        displayed on screens, which will detail the tables that
                        have been allocated to your group.
                      </p>
                      <p>
                        We do not set out seating plans with names within
                        groups. However, should you wish to create and implement
                        your own seating plan, with name cards, you are welcome
                        at any of our venues when the doors open on the night of
                        your party.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="Can I dress up to match the theme?">
                      <p>
                        You can of course get into the spirit of the party and
                        dress up relating to the theme, as long as your outfit
                        fits within our smart dress code.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="What is the dress code?">
                      <p>
                        We have a dress code of Smart Dress and as such do not
                        allow guests to wear jeans or trainers to our events.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="Do you carry out any checks upon arrival?">
                      <p>
                        On arrival, we carry out ticket and ID checks. In
                        addition, please be mindful of random bag searches
                        carried out by our security team, and please have your
                        ticket ready.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="What time do the parties start?">
                      <p>
                        The parties all open at 6.45pm, and so we recommend
                        arriving at this time.
                      </p>
                    </AccordionTab>
                  </Accordion>
                  <h4>After the party</h4>
                  <Accordion multiple>
                    <AccordionTab header="I lost something at the party!">
                      <p>
                        Please email feedback@bestpartiesever.com if you have
                        lost an item at the party - mentioning the venue you
                        attended, the date of the night you attended, as well as
                        a description of the lost item. Please put the subject
                        of this email as 'Lost Property'. We will do our best to
                        locate your item and organise a convenient time for you
                        to collect it, or arrange for this to be posted. If an
                        item needs to be posted, you will be required to provide
                        a shipping label.{' '}
                      </p>
                      <p>
                        Please note that at all events, all items are left at
                        their own risk and the company is not liable for any
                        lost property. It may be the case that your item is
                        unable to be located.
                      </p>
                    </AccordionTab>
                    <AccordionTab header="How do I send my feedback to you?">
                      <p>
                        We always love to hear how much you have enjoyed our
                        parties, and of course if you have ideas which may help
                        us improve – please do visit
                        https://www.bestpartiesever.com/feedback to complete our
                        feedback questionnaire.
                      </p>
                      <p>
                        Alternatively, please do email
                        feedback@bestpartiesever.com mentioning the venue and
                        the date of the night you attended.
                      </p>
                    </AccordionTab>
                  </Accordion>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
