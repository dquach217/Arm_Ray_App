'use strict';

exports.addPostTagsByIdPost = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.addProjectCollaborator = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.addProjectCollaborators = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * collaborators (List)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.addProjectCreator = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.addProjectCreators = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * creators (List)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.addUserCity = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * city (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.addUserFirstName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * first_name (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.addUserLastName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * last_name (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.addUserState = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * state (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.createUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * first_name (String)
  * last_name (String)
  * is_collaborator (Boolean)
  * is_creator (Boolean)
  * city (String)
  * state (String)
  * university_ids (List)
  * project_id (String)
  * keywords (List)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteAllUserProjectById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteAllUserReviewById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteImagesFromUserById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * images (List)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteKeywordFromUserById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * keyword (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteKeywordsFromUserById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deletePostTagsById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteProjectCollaborator = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteProjectCollaborators = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteProjectCreator = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteProjectCreators = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteReviewReviewer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteReviewReviewerById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUserById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUserCity = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUserFirstName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUserLastName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUserProjectById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * project_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUserReviewById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * review_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUserState = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUserUniversityById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * university_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAllProjectCollaborators = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAllProjectCreators = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAllUserImages = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAllUserKeywords = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAllUserProjectById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "project_collaborators_id" : [ "aeiou" ],
  "project_keywords" : [ "aeiou" ],
  "project_creator_id" : [ "aeiou" ],
  "grant_facilitator" : "aeiou",
  "project_urls" : [ "aeiou" ],
  "project_name" : "aeiou",
  "posts" : [ "aeiou" ],
  "is_project_private" : true,
  "project_description" : "aeiou",
  "university_id" : "aeiou",
  "reviews" : [ "aeiou" ],
  "project_id" : "aeiou",
  "grant_id" : "aeiou",
  "project_file" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "project_main_grant_type" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAllUserReviewById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "review_id" : "aeiou",
  "reviewer_id" : "aeiou",
  "rating" : 123,
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "reviewer" : {
    "keywords" : [ "aeiou" ],
    "city" : "aeiou",
    "university_ids" : [ "aeiou" ],
    "profile_images" : [ "aeiou" ],
    "last_name" : "aeiou",
    "is_creator" : true,
    "project_ids" : [ "aeiou" ],
    "review_ids" : [ "aeiou" ],
    "is_collaborator" : true,
    "is_user_private" : true,
    "user_id" : "aeiou",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "state" : "aeiou",
    "first_name" : "aeiou",
    "recent_collaborators_id" : [ "aeiou" ],
    "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  },
  "review_body" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getCityNameById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getCreatedDateById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getFirstNameById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getIsUserTagOnProject = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getLastNameById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = [ "aeiou" ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getModifiedDateById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getPostAuthorById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getPostsByAuthorId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "post_title" : "aeiou",
  "post_author" : {
    "keywords" : [ "aeiou" ],
    "city" : "aeiou",
    "university_ids" : [ "aeiou" ],
    "profile_images" : [ "aeiou" ],
    "last_name" : "aeiou",
    "is_creator" : true,
    "project_ids" : [ "aeiou" ],
    "review_ids" : [ "aeiou" ],
    "is_collaborator" : true,
    "is_user_private" : true,
    "user_id" : "aeiou",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "state" : "aeiou",
    "first_name" : "aeiou",
    "recent_collaborators_id" : [ "aeiou" ],
    "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  },
  "post_id" : "aeiou",
  "post_keywords" : [ "aeiou" ],
  "post_tags_id" : [ "aeiou" ],
  "post_tags" : [ "" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "post_author_id" : "aeiou",
  "is_post_private" : true,
  "post_text" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProjectsByCollaboratorId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "project_collaborators_id" : [ "aeiou" ],
  "project_keywords" : [ "aeiou" ],
  "project_creator_id" : [ "aeiou" ],
  "grant_facilitator" : "aeiou",
  "project_urls" : [ "aeiou" ],
  "project_name" : "aeiou",
  "posts" : [ "aeiou" ],
  "is_project_private" : true,
  "project_description" : "aeiou",
  "university_id" : "aeiou",
  "reviews" : [ "aeiou" ],
  "project_id" : "aeiou",
  "grant_id" : "aeiou",
  "project_file" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "project_main_grant_type" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProjectsByCreatorId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "project_collaborators_id" : [ "aeiou" ],
  "project_keywords" : [ "aeiou" ],
  "project_creator_id" : [ "aeiou" ],
  "grant_facilitator" : "aeiou",
  "project_urls" : [ "aeiou" ],
  "project_name" : "aeiou",
  "posts" : [ "aeiou" ],
  "is_project_private" : true,
  "project_description" : "aeiou",
  "university_id" : "aeiou",
  "reviews" : [ "aeiou" ],
  "project_id" : "aeiou",
  "grant_id" : "aeiou",
  "project_file" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "project_main_grant_type" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getReviewReviewerById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getReviewsByReviewer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "review_id" : "aeiou",
  "reviewer_id" : "aeiou",
  "rating" : 123,
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "reviewer" : {
    "keywords" : [ "aeiou" ],
    "city" : "aeiou",
    "university_ids" : [ "aeiou" ],
    "profile_images" : [ "aeiou" ],
    "last_name" : "aeiou",
    "is_creator" : true,
    "project_ids" : [ "aeiou" ],
    "review_ids" : [ "aeiou" ],
    "is_collaborator" : true,
    "is_user_private" : true,
    "user_id" : "aeiou",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "state" : "aeiou",
    "first_name" : "aeiou",
    "recent_collaborators_id" : [ "aeiou" ],
    "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  },
  "review_body" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getStateById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUserById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  * size (BigDecimal)
  * page (BigDecimal)
  * first_name (String)
  * last_name (String)
  * is_collaborator (Boolean)
  * is_creator (Boolean)
  * city (String)
  * state (String)
  * university_ids (List)
  * project_id (String)
  * created_date (String)
  * modified_date (String)
  * keywords (List)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "keywords" : [ "aeiou" ],
  "city" : "aeiou",
  "university_ids" : [ "aeiou" ],
  "profile_images" : [ "aeiou" ],
  "last_name" : "aeiou",
  "is_creator" : true,
  "project_ids" : [ "aeiou" ],
  "review_ids" : [ "aeiou" ],
  "is_collaborator" : true,
  "is_user_private" : true,
  "user_id" : "aeiou",
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "state" : "aeiou",
  "first_name" : "aeiou",
  "recent_collaborators_id" : [ "aeiou" ],
  "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsersByCreatedDate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * created_date (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "keywords" : [ "aeiou" ],
  "city" : "aeiou",
  "university_ids" : [ "aeiou" ],
  "profile_images" : [ "aeiou" ],
  "last_name" : "aeiou",
  "is_creator" : true,
  "project_ids" : [ "aeiou" ],
  "review_ids" : [ "aeiou" ],
  "is_collaborator" : true,
  "is_user_private" : true,
  "user_id" : "aeiou",
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "state" : "aeiou",
  "first_name" : "aeiou",
  "recent_collaborators_id" : [ "aeiou" ],
  "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsersByCreatedDateForm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * created_date (Date)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "keywords" : [ "aeiou" ],
  "city" : "aeiou",
  "university_ids" : [ "aeiou" ],
  "profile_images" : [ "aeiou" ],
  "last_name" : "aeiou",
  "is_creator" : true,
  "project_ids" : [ "aeiou" ],
  "review_ids" : [ "aeiou" ],
  "is_collaborator" : true,
  "is_user_private" : true,
  "user_id" : "aeiou",
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "state" : "aeiou",
  "first_name" : "aeiou",
  "recent_collaborators_id" : [ "aeiou" ],
  "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsersByKeywords = function(args, res, next) {
  /**
   * parameters expected in the args:
  * keywords (List)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "keywords" : [ "aeiou" ],
  "city" : "aeiou",
  "university_ids" : [ "aeiou" ],
  "profile_images" : [ "aeiou" ],
  "last_name" : "aeiou",
  "is_creator" : true,
  "project_ids" : [ "aeiou" ],
  "review_ids" : [ "aeiou" ],
  "is_collaborator" : true,
  "is_user_private" : true,
  "user_id" : "aeiou",
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "state" : "aeiou",
  "first_name" : "aeiou",
  "recent_collaborators_id" : [ "aeiou" ],
  "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsersByModifiedDate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * modified_date (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "keywords" : [ "aeiou" ],
  "city" : "aeiou",
  "university_ids" : [ "aeiou" ],
  "profile_images" : [ "aeiou" ],
  "last_name" : "aeiou",
  "is_creator" : true,
  "project_ids" : [ "aeiou" ],
  "review_ids" : [ "aeiou" ],
  "is_collaborator" : true,
  "is_user_private" : true,
  "user_id" : "aeiou",
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "state" : "aeiou",
  "first_name" : "aeiou",
  "recent_collaborators_id" : [ "aeiou" ],
  "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsersByModifiedDateForm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * modified_date (Date)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "keywords" : [ "aeiou" ],
  "city" : "aeiou",
  "university_ids" : [ "aeiou" ],
  "profile_images" : [ "aeiou" ],
  "last_name" : "aeiou",
  "is_creator" : true,
  "project_ids" : [ "aeiou" ],
  "review_ids" : [ "aeiou" ],
  "is_collaborator" : true,
  "is_user_private" : true,
  "user_id" : "aeiou",
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "state" : "aeiou",
  "first_name" : "aeiou",
  "recent_collaborators_id" : [ "aeiou" ],
  "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsersByProjectId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * project_id (String)
  * max (BigDecimal)
  * page (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "keywords" : [ "aeiou" ],
  "city" : "aeiou",
  "university_ids" : [ "aeiou" ],
  "profile_images" : [ "aeiou" ],
  "last_name" : "aeiou",
  "is_creator" : true,
  "project_ids" : [ "aeiou" ],
  "review_ids" : [ "aeiou" ],
  "is_collaborator" : true,
  "is_user_private" : true,
  "user_id" : "aeiou",
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "state" : "aeiou",
  "first_name" : "aeiou",
  "recent_collaborators_id" : [ "aeiou" ],
  "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsersByUniversityId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * university_id (String)
  * max (BigDecimal)
  * page (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "keywords" : [ "aeiou" ],
  "city" : "aeiou",
  "university_ids" : [ "aeiou" ],
  "profile_images" : [ "aeiou" ],
  "last_name" : "aeiou",
  "is_creator" : true,
  "project_ids" : [ "aeiou" ],
  "review_ids" : [ "aeiou" ],
  "is_collaborator" : true,
  "is_user_private" : true,
  "user_id" : "aeiou",
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "state" : "aeiou",
  "first_name" : "aeiou",
  "recent_collaborators_id" : [ "aeiou" ],
  "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isCollaboratorById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isCreatorById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isReviewOnUserById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * review_id (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isUniversityOnUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * university_id (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isUserCity = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * city (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isUserCollaboratorOnProject = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "keywords" : [ "aeiou" ],
  "city" : "aeiou",
  "university_ids" : [ "aeiou" ],
  "profile_images" : [ "aeiou" ],
  "last_name" : "aeiou",
  "is_creator" : true,
  "project_ids" : [ "aeiou" ],
  "review_ids" : [ "aeiou" ],
  "is_collaborator" : true,
  "is_user_private" : true,
  "user_id" : "aeiou",
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "state" : "aeiou",
  "first_name" : "aeiou",
  "recent_collaborators_id" : [ "aeiou" ],
  "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isUserCreatorOnProject = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isUserFirstName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * first_name (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isUserHaveKeyword = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * keyword (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isUserLastName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * last_name (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isUserOnProjectById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * project_id (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isUserReviewReviewer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isUserState = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * state (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.modifyUserCity = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * city (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.modifyUserFirstName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * first_name (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.modifyUserLastName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * last_name (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.modifyUserState = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * state (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setAllProjectCollaborators = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * collaborators (List)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setAllProjectCreators = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * creators (List)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setIsUserCollaboratorById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * isCollaborator (Boolean)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setIsUserCollaboratorByIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * isCollaborator (Boolean)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setIsUserCreatorById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * isCreator (Boolean)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setIsUserCreatorByIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * isCollaborator (Boolean)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setProjectCollaborators = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setProjectCreator = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setReviewReviewerById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setUserImages = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * images (List)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setUserKeyword = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * keyword (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setUserKeywords = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * keywords (List)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setUserReviewById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * review_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.settUserProjectById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * project_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.settUserUniversityById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * university_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updatePostTagsById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (List)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateReviewReviewerById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * first_name (String)
  * last_name (String)
  * is_collaborator (Boolean)
  * is_creator (Boolean)
  * city (String)
  * state (String)
  * university (String)
  * project_id (String)
  * keywords (List)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

