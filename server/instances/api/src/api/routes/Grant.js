import express from 'express';
import Grant from '../services/Grant';

const router = express.Router();

/**
 * Creates &#x60;Grant&#x60; objects. All fields required.
 *
 */
router.post('/', (req, res, next) => {
  const options = {
    req : req
  };

  Grant.createGrant(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;Grant&#x60; objects by **id**.
 *
 */
router.delete('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.deleteGrantById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;Grant&#x60; objects. **id** is required,
 *
 * all others optional.
 *
 */
router.put('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.updateGrantById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Clear &#x60;Grant&#x60; amount
 *
 */
router.delete('/:id/amount', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.clearGrantAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; amount
 *
 */
router.post('/:id/amount', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.setGrantAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60; amount
 *
 */
router.put('/:id/amount', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.modifyGrantAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; amount
 *
 */
router.post('/:id/amount/{amount}', (req, res, next) => {
  const options = {
    id: req.params.id,
    amount: req.params.amount,
    req : req
  };

  Grant.setGrantAmountPath(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60; amount
 *
 */
router.put('/:id/amount/{amount}', (req, res, next) => {
  const options = {
    id: req.params.id,
    amount: req.params.amount,
    req : req
  };

  Grant.modifyGrantAmountPath(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Clear &#x60;Grant&#x60; description
 *
 */
router.delete('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.clearGrantDescription(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; description
 *
 */
router.post('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.setGrantDescription(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60; description
 *
 */
router.put('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.modifyGrantDescription(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Clear &#x60;Grant&#x60; keywords
 *
 */
router.delete('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.clearGrantKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; keywords
 *
 */
router.post('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.setGrantKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60; keywords
 *
 */
router.put('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.addGrantKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; keyword
 *
 */
router.delete('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword,
    req : req
  };

  Grant.deleteGrantKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; keyword
 *
 */
router.post('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword,
    req : req
  };

  Grant.setGrantKeywordPath(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add &#x60;Grant&#x60; keyword
 *
 */
router.put('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword,
    req : req
  };

  Grant.addGrantKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Clear &#x60;Grant&#x60; type
 *
 */
router.delete('/:id/type', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.clearGrantType(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; amount
 *
 */
router.post('/:id/type', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.setGrantType(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60; amount
 *
 */
router.put('/:id/type', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.modifyGrantType(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; type
 *
 */
router.post('/:id/type/{type}', (req, res, next) => {
  const options = {
    id: req.params.id,
    type: req.params.type,
    req : req
  };

  Grant.setGrantTypePath(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60; amount
 *
 */
router.put('/:id/type/{type}', (req, res, next) => {
  const options = {
    id: req.params.id,
    type: req.params.type,
    req : req
  };

  Grant.modifyGrantTypePath(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Clear &#x60;Grant&#x60; url array
 *
 */
router.delete('/:id/url', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.clearGrantUrls(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Replace &#x60;Grant&#x60; url array
 *
 */
router.post('/:id/url', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.setGrantUrls(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add &#x60;Grant&#x60; url
 *
 */
router.put('/:id/url', (req, res, next) => {
  const options = {
    id: req.params.id,
    req : req
  };

  Grant.addGrantUrl(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});


/**
 * Retrieves &#x60;Grant&#x60; objects by **id**.
 *
 */
router.get('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; amount
 *
 */
router.get('/:id/amount', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves if &#x60;Grant&#x60; amount is equal to param
 *
 */
router.get('/:id/amount/{amount}', (req, res, next) => {
  const options = {
    id: req.params.id,
    amount: req.params.amount
  };

  Grant.isGrantAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; object created date
 *
 */
router.get('/:id/created', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantCreatedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; description
 *
 */
router.get('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantDescription(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; keywords
 *
 */
router.get('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves if &#x60;Grant&#x60; amount is equal to param
 *
 */
router.get('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Grant.isGrantHaveKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; objects modified date
 *
 */
router.get('/:id/modified', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantModifiedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; amount
 *
 */
router.get('/:id/type', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantType(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves if &#x60;Grant&#x60; amount is equal to param
 *
 */
router.get('/:id/type/{type}', (req, res, next) => {
  const options = {
    id: req.params.id,
    type: req.params.type
  };

  Grant.isGrantType(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; url
 *
 */
router.get('/:id/url', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantUrl(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});


/**
 * Gets &#x60;Grant&#x60; objects.
 *
 * Required query param of **size** determines
 *
 * max number of results per page, and **page** determines
 *
 * which page in the pagination we are. Remaining params
 * optional.
 *
 */
router.get('/', (req, res, next) => {
  const options = {
  };

  Grants.getGrants(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects by a set of keywords
 *
 */
router.get('/keys', (req, res, next) => {
  const options = {
  };

  Grants.getGrantsByKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Project&#x60; objects by a particular keyword
 *
 */
router.get('/keys/:keyword', (req, res, next) => {
  const options = {
    keyword: req.params.keyword
  };

  Grants.getGrantsByKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects created on or later than given date
 *
 */
router.get('/created_date', (req, res, next) => {
  const options = {
  };

  Grants.getGrantsByCreatedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects created on or later than given date
 *
 */
router.get('/created_date/:created_date', (req, res, next) => {
  const options = {
    created_date: req.params.created_date
  };

  Grants.getGrantsByCreatedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects modified on or later than given
 * date
 *
 */
router.get('/modified_date', (req, res, next) => {
  const options = {
  };

  Grants.getGrantsByModifiedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects created on or later than given date
 *
 */
router.get('/modified_date/:modified_date', (req, res, next) => {
  const options = {
    modified_date: req.params.modified_date
  };

  Grants.getGrantsByModifiedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects based on amount
 *
 */
router.get('/amount', (req, res, next) => {
  const options = {
  };

  Grants.getGrantsByAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects based on type
 *
 */
router.get('/type', (req, res, next) => {
  const options = {
  };

  Grants.getGrantsByTypeForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects based on type
 *
 */
router.get('/type/:type', (req, res, next) => {
  const options = {
    type: req.params.type
  };

  Grants.getGrantsByType(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects based on amount
 *
 */
router.get('/amount/min/:amount', (req, res, next) => {
  const options = {
    amount: req.params.amount
  };

  Grants.getGrantsByMinAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects based on amount
 *
 */
router.get('/amount/max/:amount', (req, res, next) => {
  const options = {
    amount: req.params.amount
  };

  Grants.getGrantsByMaxAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects based on amount
 *
 */
router.get('/amount/min/:min/max/{max}', (req, res, next) => {
  const options = {
    min: req.params.min,
    max: req.params.max
  };

  Grants.getGrantsByAmountRange(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
