use `letterboxDB`;
create table user (
	user_code int auto_increment,
    id long,
    platform varchar(128),
    profile_img varchar(128),
    nickname varchar(128),
    email varchar(128),
    user_role varchar(128),
    create_time timestamp default current_timestamp,
	primary key(user_code)
);

create table letterBox (
	letterbox_id int auto_increment,
	owner int,
	name varchar(128),
    primary key(letterbox_id),
    foreign key(owner) references user(user_code)
);

create table letter (
	letter_id int auto_increment,
    letterbox int,
    user int,
    name varchar(128),
    nickname varchar(128),
    hint1 varchar(1000),
    hint2 varchar(1000),
    hint3 varchar(1000),
    phone varchar(512),
    content varchar(1000),
    photo longblob,
    created_at timestamp,
    primary key(letter_id),
    foreign key(user) references user(user_code),
    foreign key(letterbox) references letterBox(letterbox_id)
);

create table files (
	file_id int auto_increment,
    filename varchar(512),
    fileoriname varchar(512),
    fileurl varchar(512),
    primary key(file_id)
);

alter table letterboxDB.letter add file int;
alter table letterboxDB.letter add foreign key(file) references files(file_id);
alter table letterboxDB.letter drop column photo;