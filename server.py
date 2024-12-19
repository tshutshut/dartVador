from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# Path to the text file storing players
PLAYERS_FILE = 'players_list.txt'

# Ensure the file exists
if not os.path.exists(PLAYERS_FILE):
    with open(PLAYERS_FILE, 'w') as f:
        pass  # Create an empty file if it doesn't exist


@app.route('/players', methods=['GET'])
def get_players():
    """Endpoint to fetch the list of players."""
    with open(PLAYERS_FILE, 'r') as file:
        players = [line.strip() for line in file.readlines()]
    return jsonify(players)


@app.route('/players', methods=['POST'])
def add_player():
    """Endpoint to add a new player."""
    data = request.json
    player_name = data.get('playerName', '').strip()

    if not player_name:
        return jsonify({"success": False, "message": "Invalid player name."}), 400

    # Check if player already exists
    with open(PLAYERS_FILE, 'r') as file:
        players = [line.strip() for line in file.readlines()]
    if player_name in players:
        return jsonify({"success": False, "message": "Player Already Exists"}), 200

    # Add new player
    with open(PLAYERS_FILE, 'a') as file:
        file.write(player_name + '\n')

    return jsonify({"success": True, "message": "New Player Added"}), 200


if __name__ == '__main__':
    app.run(debug=True)
