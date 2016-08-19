defmodule Beauty.Participant do
  alias Beauty.Actions

  # Actions
  def fetch_contents(data, id) do
    Actions.update_participant_contents(data, id)
  end

  def input(data, id, number)do
	inputs = get_in(data, [:inputs])
	inputs = inputs + 1
  	data = data
		|> put_in([:participants, id ,:inputed], true)
		|> put_in([:participants, id ,:number], number)
		|> put_in([:inputs], inputs)
	Actions.input(data, id)
  end

  # Utilities

  def format_participant(participant), do: participant

  def format_data(data) do
    %{
      page: data.page,
    }
  end

  def format_contents(data, id) do
    %{participants: participants} = data
    participant = Map.get(participants, id)
    format_participant(participant)
    |> Map.merge(format_data(data))
  end
end
