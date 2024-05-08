import random
while True:
    h = 0
    card1 = 1
    card2 = 1
    opp1 = random.randint(1,13)
    opp2 = random.randint(1,13)
    opp3 = 0
    opp4 = 0
    opp5 = 0
    hand1 = random.randint(1,13)
    hand2 = random.randint(1,13)
    hand3 = 0
    hand4 = 0
    hand5 = 0
    card3 = 0
    card4 = 0
    card5 = 0
    ptotal = 0
    opptotal = 0
    if opp1 >= 2 and opp1 <= 10:
        print("the dealer has a " + str(opp1))
    elif opp1 == 11:
        print("The dealer has a Jack")
    elif opp1 == 12:
        print("The dealer has a Queen")
    elif opp1 == 13:
        print("The dealer has a King")
    elif opp1 == 1:
        print("The dealer has an Ace")

    if hand1 == 11:
        card1 == "Jack"
    elif hand1 == 12:
        card1 == "Queen"
    elif hand1 == 13:
        card1 == "King"
    elif hand1 == 1:
        card1 == "Ace"
    else:
        card1 = hand1

    if hand2 == 11:
        card2 == "Jack"
    elif hand2 == 12:
        card2 == "Queen"
    elif hand2 == 13:
        card2 == "King"
    elif hand2 == 1:
        card2 == "Ace"
    else:
        card2 = hand2

    print("Your Hand is a " + str(card1) + " and a " + str(card2))
    user_input = float(int(input("1 to hit, 2 to stay: ")))
    if user_input == 1:
        hand3 = random.randint(1,13)
        print("You drew a " + str(hand3))
        user_input2 = float(int(input("1 to hit, 2 to stay: ")))
        if user_input2 == 1:
            hand4 == random.randint(1,13)
            print("You drew a " + str(hand4))
            user_input3 = float(int(input("1 to hit, 2 to stay: ")))
            if user_input3 == 1:
                hand5 == random.randint(1,13)
                print("You drew a " + str(hand5))
    #total points for hand
    if hand1 >= 11:
        hand1 == 10
    if hand2 >= 11:
        hand2 == 10
    if hand3 >= 11:
        hand3 == 10
    if hand4 >= 11:
        hand4 == 10
    if hand5 >= 11:
        hand5 == 10
    if hand1 == 1:
        hand1 == 11
    if hand2 == 1:
        hand2 == 11
    if hand3 == 1:
        hand3 == 11
    if hand4 == 1:
        hand4 == 11
    if hand5 == 1:
        hand5 == 11    

    ptotal = hand1 + hand2 + hand3 + hand4 + hand5

    #enemy points and ai
    if opp1 >= 11:
        opp1 == 10
    if opp2 >= 11:
        opp2 == 10
    if opp3 >= 11:
        opp3 == 10
    if opp4 >= 11:
        opp4 == 10
    if opp5 >= 11:
        opp5 == 10
    if opp1 == 1:
        opp1 == 11
    if opp2 == 1:
        opp2 == 11
    if opp3 == 1:
        opp3 == 11
    if opp4 == 1:
        opp4 == 11
    if opp5 == 1:
        opp5 == 11    

    atotal = opp1 + opp2
    if atotal <= 16:
        opp3 = random.randint(1,13)
        h += 1
    btotal = opp1 + opp2 + opp3
    if btotal <= 16:
        opp4 = random.randint(1,13)
        h += 1      
    ctotal = opp1 + opp2 + opp3 + opp4
    if btotal <= 16:
        opp5 = random.randint(1,13)
        h += 1    
    dtotal = opp1 + opp2 + opp3 + opp4 + opp5       


    if h == 0:
        opptotal = atotal
    elif h == 1:
        opptotal = btotal
    elif h == 2:
        opptotal = ctotal
    else:
        opptotal = dtotal

    #calculate who wins
    if opptotal > 21:
        print("Dealer busts, you win")
    elif ptotal > 21:
        print("you bust, you lose")
    elif opptotal > ptotal:
        print("dealer had " + str(opptotal) + " and you had " + str(ptotal) + " you lose")
    elif opptotal < ptotal:
        print("dealer had " + str(opptotal) + " and you had " + str(ptotal) + " you win")
    end  = input("type quit to quit ")
    if end == "quit":
        break
