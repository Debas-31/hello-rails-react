class Api::V1::GreetingsController < ApplicationController
  before_action :set_greeting, only: %i[show edit update destroy]

  # GET /greetings or /greetings.json
  def index
    @greeting = Greeting.order('RANDOM()').first
    if @greeting
      render json: { status: 'SUCCESS', data: { greeting: @greeting }, message: 'Greeting loaded successfully' },
             status: :ok
    else
      render json: { success: false, errors: 'Oops, Something went wrong!' }, status: :unprocessable_entity
    end
  end
end
