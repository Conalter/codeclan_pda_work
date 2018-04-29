

    require("minitest/autorun")
    require_relative("testing_task_2.rb")
    require_relative("card.rb")

    class CardGameTest < MiniTest::Test

      def setup
        @cardgame = CardGame.new
        @card1 = Card.new("Clubs", 1)
        @card2 = Card.new("Spades", 9)
      end

      def test_check_for_ace__true()
        assert_equal(true, @cardgame.check_for_ace(@card1))
      end

      def test_check_for_ace__false()
        assert_equal(false, @cardgame.check_for_ace(@card2))
      end

      def test_highest_card
        assert_equal("Spades", @cardgame.highest_card(@card1, @card2))
      end

      def test_cards_total()
        cards = [@card1, @card2]
        assert_equal("You have a total of 10", CardGame.cards_total(cards))
      end

    end
