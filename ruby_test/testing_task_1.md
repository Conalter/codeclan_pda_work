### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

# def shouldn't have capital in name
  def checkforAce(card)
    if card.value = 1 #needs an extra '=' symbol
      return true
    else
      return false
    end
  end

# def is spelt wrong
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name #should read card1.suit
  else
    card2 #should read card2.suit
  end
end
end
# extra 'end'

def self.cards_total(cards)
  # total needs to equal a the cards value
  total
  for card in cards
    total += card.value #should be end on next line
    return "You have a total of" + total #should read total.to_s
  end
end

# no end to the CardGame class
```
