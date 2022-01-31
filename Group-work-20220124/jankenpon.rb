class Player
    def hand
        puts "数字を入力してください。"
        puts "0:グー, 1:チョキ, 2:パー"
        input_hand = gets.chomp
        while true
            if input_hand == "0" || input_hand == "1" || input_hand == "2"
                return input_hand.to_i
            else
                puts "数字を入力してください。"
                puts "0:グー, 1:チョキ, 2:パー"
                input_hand = gets.chomp
            end
        end
    end
end

class Enemy
    def hand
        return rand(0..2)
    end
end

class Janken
    def pon(player_hand, enemy_hand)
        janken = ["グー", "チョキ", "パー"]
        puts "相手の手は#{janken[enemy_hand]}です。"
        if player_hand == enemy_hand
            puts "あいこ";
            true;
        elsif (player_hand == 0 && enemy_hand == 1) || (player_hand == 1 && enemy_hand == 2) || (player_hand == 2 && enemy_hand == 0) 
            puts "あなたの勝ちです"
            false;
        else
            puts "あなたの負けです"
            false;
        end
    end
end

class GameStart
    def self.jankenpon
      player = Player.new
      enemy = Enemy.new
      janken = Janken.new
        next_game = true
            while next_game do
        next_game = janken.pon(player.hand, enemy.hand)
      end
    end
end

GameStart.jankenpon