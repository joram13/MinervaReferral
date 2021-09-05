import os, enum
from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import (
    func,
    String,
    Column,
    Integer,
    Enum,
    DateTime,
    Index,
    ForeignKey,
    ARRAY,
    Date,
)

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')
app.config['SERVER_name'] = '0.0.0.0'
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class MajorEnum(str, enum.Enum):
    """
    class defining enums for majors
    used in tables
    """

    CS = "Computer Science"
    BS = "Business"
    NS = "Natural Science"
    AH = "Arts and Humanities"
    SS = "Social Science"
    CSBS = "Computer Science and Business"
    CSNS = "Computer Science and Natural Science"
    CSAH = "Computer Science and Arts and Humanities"
    CSSS = "Computer Science and Social Science"
    BSNS = "Business and Natural Science"
    BSAH = "Business and Arts and Humanities"
    BSSS = "Business and Social Science"
    NSAH = "Natural Science and Arts and Humanities"
    NSSS = "Natural Science and Social Science"
    AHSS = "Arts and Humanities and Social Science"


class JobTypeEnum(str, enum.Enum):
    """
    class defining enums for job types
    used in tables
    """

    fulltime = "fulltime"
    parttime = "parttime"
    contract = "contract"
    other = "other"


class LookingEnum(str, enum.Enum):
    """
    class defining enums for active_looking
    used in tables
    """

    yes = "active looking"
    no = "not active looking"


class ReferralTagEnum(str, enum.Enum):
    """
    class defining enums for ReferralTagEnum
    used in tables
    """

    Referral = "Can give a referral"
    Interview = "Can do an informational interview"


class Users(db.Model):
    """
    This table stores all important information about the users
    """

    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String(50), index=True)
    email = Column(String(50))
    linkedin = Column(String(50))
    major = Column(Enum(MajorEnum), index=True)
    grad_year = Column(Integer)
    current_work = Column(String(50))
    current_title = Column(String(50))
    interests = Column(String(100))
    role_id = Column(Integer, ForeignKey("roles.id"))
    resume = Column(String(50))
    bio = Column(String(500))
    image = Column(String(50))
    cover = Column(String(50))

    time_created = Column(DateTime(timezone=True), server_default=func.now())

    __table_args__ = (Index("search", "name", "current_title"), )

    # candidate_portal = relationship("CandidatePortal", backref="users")
    # other_companies = relationship("OtherCompanies", backref="users")
    # user_past_experience = relationship("UserPastExperience", backref="users")


class Companies(db.Model):
    """
    This table stores all important information about the companies
    """

    __tablename__ = "companies"

    id = Column(Integer, primary_key=True)
    name = Column(String(50), index=True)
    logo = Column(String)  # Change to URL
    time_created = Column(DateTime(timezone=True), server_default=func.now())

    # other_companies = relationship("OtherCompanies", backref="companies")
    # user_past_experience = relationship("UserPastExperience", backref="companies")


class CandidatePortal(db.Model):
    """
    This table stores all information about candidate for a referral
    """

    __tablename__ = "candidate_portal"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    description = Column(String(100))
    role_type = Column(Enum(JobTypeEnum), index=True)
    startdate = Column(Date, index=True)
    active_looking = Column(Enum(LookingEnum), index=True)
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    users = relationship(Users)

    __table_args__ = (
        Index("search1", "startdate", "role_type"),
        Index("search2", "startdate", "active_looking"),
        Index("search3", "active_looking", "role_type"),
    )

    # candidate_portal_roles = relationship(
    #     "CandidatePortalRoles", backref="candidate_portal"
    # )


class Roles(db.Model):
    """
    This table stores information about different job roles
    """

    __tablename__ = "roles"

    id = Column(Integer, primary_key=True)
    role_name = Column(String(50), index=True)
    time_created = Column(DateTime(timezone=True), server_default=func.now())

    # candidate_portal = relationship("CandidatePortal", backref="roles")
    # user_past_experience = relationship("UserPastExperience", backref="roles")
    # candidate_portal_roles = relationship("CandidatePortalRoles", backref="roles")


class CandidatePortalRoles(db.Model):

    __tablename__ = "candidate_portal_roles"

    cp_id = Column(Integer,
                   ForeignKey("candidate_portal.id"),
                   primary_key=True,
                   index=True)
    role_id = Column(Integer,
                     ForeignKey("roles.id"),
                     primary_key=True,
                     index=True)
    candidate_portal = relationship(CandidatePortal)
    roles = relationship(Roles)

    __table_args__ = (
        Index("search4", "cp_id", "role_id"),
        Index("search5", "role_id", "cp_id"),
    )


class OtherCompanies(db.Model):
    """
    This table stores all information about a referrer given a referral
    """

    __tablename__ = "other_companies"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"), index=True)
    company_id = Column(Integer, ForeignKey("companies.id"), index=True)
    time_created = Column(DateTime(timezone=True), server_default=func.now())

    users = relationship(Users)
    companies = relationship(Companies)


class UserPastExperience(db.Model):
    """
    This table stores past experiences of users
    """

    __tablename__ = "user_past_experience"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    company_id = Column(Integer, ForeignKey("companies.id"))
    role_id = Column(Integer, ForeignKey("roles.id"))
    startdate = Column(Date, index=True)
    enddate = Column(Date, index=True)
    tag = Column(Enum(ReferralTagEnum))
    time_created = Column(DateTime(timezone=True), server_default=func.now())
    users = relationship(Users)
    companies = relationship(Companies)
    roles = relationship(Roles)


db.create_all()

#company_google = Companies(name='Google', logo='google.com')
#company_amazon = Companies(name='Amazon', logo='amazon.com')
#company_facebook = Companies(name='Facebook', logo='facebook.com')

#db.session.add(company_google)
#db.session.add(company_amazon)
#db.session.add(company_facebook)
#db.session.commit()

#role1 = Roles(role_name = "working")
#user_joram = Users(name="joram erbarth", email="joram@minerva.kgi.edu", linkedin = "https://www.linkedin.com/in/joram-erbarth-9697b1162/", major = "CS", grad_year = 2023, role_id = 1, interests = "this and that", resume = "www.google.com", current_title = "working", bio = "bio", image = "imgae", cover = "cover")
#joram_past1 = UserPastExperience(user_id = 1, company_id = 2, role_id = 1, startdate = datetime.date(2020,1,5), enddate = datetime.date(2020,1,5), tag = "Referral")
#joram_past2 = UserPastExperience(user_id = 1, company_id = 1, role_id = 1, startdate = datetime.date(2020,1,5), enddate = datetime.date(2020,1,5), tag = "Referral")
#jecp = CandidatePortal(user_id = 1, description = "this job", role_type = "fulltime", startdate = datetime.date(2020,1,5), active_looking = "yes")

#db.session.add(user_joram)
#db.session.add(role1)
#db.session.add(joram_past1)
#db.session.add(joram_past2)
#db.session.add(jecp)

#db.session.commit()


def users_serializer(users, pastex):

    role = Roles.query.filter_by(id=users.role_id).with_entities(
        Roles.role_name).first()
    candid_portal = CandidatePortal.query.filter_by(
        user_id=users.id).with_entities(CandidatePortal.description).first()
    return {
        'name': users.name,
        'grad_year': users.grad_year,
        'major': users.major,
        'current_work': role[0],
        'interests': users.interests,
        'email': users.email,
        'linkedin': users.linkedin,
        'resume': users.resume,
        'user_past_experience': pastex,
        'candidate_portal': candid_portal[0],
        'bio': users.bio,
        'image': users.image,
        'cover': users.cover,
    }


def past_experience_serializer(user_past_experience):

    role = Roles.query.filter_by(
        id=user_past_experience.role_id).with_entities(
            Roles.role_name).first()
    company = Companies.query.filter_by(
        id=user_past_experience.company_id).with_entities(
            Companies.name).first()
    return {
        'title': role[0],
        'company': company[0],
        'date': user_past_experience.startdate,
        'description': user_past_experience.tag,
    }


#@app.route("/users", methods=['GET', 'POST'])
#def  users():
#    if request.method == 'GET':
#        users = Users.query.all()
#        return jsonify([*map(users_serializer, users)])
#
#    elif request.method == 'POST':
#        request_data = json.load(request.data)
#        new_user = Users(name=request_data['name'] , email=request_data['email'], linkedin = "request_data['linkedin']", major = request_data['major'], grad_year = request_data['grad_year'])

#        db.session.add(new_user)
#        db.session.commit()

#       return {'201': 'New user created successfully'}


@app.route("/user/<int:id>", methods=['GET' , 'POST'])
def get_user_id(id):
    if request.method == "GET":
        user = Users.query.filter_by(id=id)
        past_experience = UserPastExperience.query.filter_by(user_id=id)

        pastex = [*map(past_experience_serializer, past_experience)]
        return jsonify([*map(users_serializer, user, [pastex])])

    elif request.method == 'POST':
        possible_changes = ["name", "email", "linkedin", "major", "grad_year", "current_work", "current_title", "interests", "role_id", "resume", "bio", "image", "cover"]
        for change in possible_changes:
            try:
                new = request.form[change]
                User.update.where(id=id).values(change : new)





@app.route('/logout')
def logout():
    # remove the username from the session if it's there
    session.pop('email', None)
    return redirect(url_for('login'))


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # TODO Replace this with actual comparison with DB
        if request.form['email'] == 'alice@minerva.kgi.edu' and\
            request.form['password'] == '123123':
            session['email'] = request.form['email']
            resp = redirect(url_for('index'))
            resp.set_cookie('userid', '2')  # TODO change this to user's id
            return resp
    return render_template("login.html")


# Catch-all router must be the last of all routers
@app.route('/', defaults={'u_path': ''})
@app.route('/<path:u_path>')
def index(u_path):
    if 'email' in session:
        return render_template("index.html")
    return redirect(url_for('login'))


if __name__ == "__main__":
    app.run(debug=True)
