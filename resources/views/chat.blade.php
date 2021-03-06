@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Let's Chat
                    <span class="badge pull-right">@{{ usersInRoom.length }}</span>
                </div>
                <div class="panel-body">
					<div id="app">
						<h1>Chat Room</h1>
						<chat-log :messages="messages"></chat-log>
						<chat-composer v-on:messagesent="addMessage"></chat-composer>
					</div>
				</div>
            </div>
        </div>
    </div>
</div>
@endsection
